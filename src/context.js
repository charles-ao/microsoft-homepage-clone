import React, { useState, useContext, useEffect } from 'react';
import {sublinks, dropLinks, footer} from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loadDropbar, setLoadDropbar] = useState(false)
  const [loadSidebar, setLoadSidebar] = useState(false)
  const [dropData, setDropData] = useState([])
  const [sideData, setSideData] = useState([])
  const [footerData, setFooterData] = useState([])
  const [sideDrop, setSideDrop] = useState(false)

  useEffect(() => {
    setDropData(dropLinks)
    setSideData(sublinks)
    setFooterData(footer)
  }, [])
  
  const  toggleDrop = () => {
    setLoadDropbar(!loadDropbar)
  }

  const  toggleSide = () => {
    setLoadSidebar(!loadSidebar)
  }

  const toggleSideDrop = () => {
    setSideDrop(!sideDrop)
  }



  return (
    <AppContext.Provider
      value={{
        loadDropbar,
        dropData,
        sideData,
        loadSidebar,
        sideDrop,
        footerData,
        toggleSideDrop, 
        toggleSide,
        toggleDrop,
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
