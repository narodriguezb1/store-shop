import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import ProductCard from "../Components/Home/ProductCard";
import Typography from "../Components/Common/Typography";
import { useStoreContext } from "../Context/Store";

const Home = () => {
  const { products } = useStoreContext();

  return (
    <Layout>
      {!products ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {products && products.length > 0 ? (
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
