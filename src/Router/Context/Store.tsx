import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import productServices from "../Api/productsApi";

export const StoreContext = createContext({});

interface StoreProviderProps {}

const StoreProvider: React.FC<React.PropsWithChildren<StoreProviderProps>> = ({
  children,
}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await productServices.getAllProducts();
    setProducts(response);
  };

  const storeProvider = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products, setProducts]
  );

  return (
    <StoreContext.Provider value={storeProvider}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const useStoreContext = useContext(StoreContext);
  if (!useStoreContext) {
    throw new Error("useQuestionStepper error");
  }
  return useStoreContext;
};

export default StoreProvider;
