import React, { useState, useContext, ReactNode } from 'react';


interface UserContextValueType{
    isSidebarOpen:boolean;
    isModalOpen:boolean;
    openSidebar:()=>void;
    closeSidebar:()=>void;
    openModal:()=>void;
    closeModal:()=>void;
}

const initialUser:UserContextValueType={
    isSidebarOpen:false,
    isModalOpen:false,
    openSidebar:()=>{},
    closeSidebar:()=>{},
    openModal:()=>{},
    closeModal:()=>{}
}

const AppContext = React.createContext<UserContextValueType>(initialUser);

const AppProvider = ({ children }:{children:ReactNode}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };