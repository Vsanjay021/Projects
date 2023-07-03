import React, { useState, useContext, ReactNode } from "react";
import sublinks, { LinkType, SublinkType } from "./data";

type AppContextType = {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: (
    text: string,
    coordinates: { center: number; bottom: number }
  ) => void;
  closeSubmenu: () => void;
  page: SublinkType;
  location: {};
};

const Appcontext = React.createContext<AppContextType>({
  isSidebarOpen: false,
  isSubmenuOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  openSubmenu: (text, coordinates) => {},
  closeSubmenu: () => {},
  page: { page: "", links: [] },
  location: {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [page, setPage] = useState<SublinkType>({ page: "", links: [] });
  const [location, setLocation] = useState<{ center: number; bottom: number }>({
    center: 0,
    bottom: 0,
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (
    text: string,
    coordinates: { center: number; bottom: number }
  ) => {
    const page = sublinks.find((link) => link.page === text);
    if (page) {
      setPage(page);
    }

    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <Appcontext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { AppProvider };
