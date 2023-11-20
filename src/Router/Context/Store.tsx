import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import productServices from "../Api/productsApi";

export const StoreContext = createContext({});

const StoreProvider = ({
  children,
}) => {
  const [products, setProducts] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await productServices.getAllProducts();
    setProducts(response);
  };

  const value = useMemo(
    () => ({
      selectedProducts,
      setSelectedProducts,
      products,
      setProducts,
    }),
    [products, setProducts, selectedProducts, setSelectedProducts]
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const useStoreContext = useContext(StoreContext);
  if (!useStoreContext) {
    throw new Error("useStoreContext error");
  }
  return useStoreContext;
};

export default StoreProvider;
