import { useState, useEffect } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import ProductCard from "../Components/Home/ProductCard";
import productServices from "../Api/productsApi";
import Typography from "../Components/Common/Typography";

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
          {products.length > 0 ? (
            products.map((item) => <ProductCard key={item.id} product={item} />)
          ) : (
            <Typography>There are not products!</Typography>
          )}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export default Home;
