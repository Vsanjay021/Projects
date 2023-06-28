import React, { ReactNode, useState ,useContext } from "react";
import { data, DataType } from "./data";
import App from "./App";

const url: string = "https://course-api.com/react-useReducer-cart-project";

type AppContextType={
    cart:DataType[]
}

const AppContext = React.createContext<AppContextType>({
    cart:[]
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState(data);
  return (
    <AppContext.Provider
      value={{
        cart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext=()=>{
    return useContext(AppContext);
}


export default AppProvider;
