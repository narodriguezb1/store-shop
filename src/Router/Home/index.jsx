import { useState, useEffect } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import ProductCard from "../Components/Common/ProductCard";
import productServices from "../Api/productsApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const response = await productServices.getAllProducts();
      console.log({ response });
      setProducts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export default Home;
