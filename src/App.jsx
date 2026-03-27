import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createContext, useContext } from "react";

import Loader from "./components/Loader";
import PrivateRoute from "./components/privateroute/PrivateRoute"
import Redirector from "./components/privateroute/Redirector"
import MisBoletos from "./pages/MisBoletos"
import BoletoDetalle from "./pages/BoletoDetalle"
import TransferDetalle from "./pages/TransferDetalle"
import Navbar from "./pages/Navbar"
import Login from "./pages/Login"

export const MenuContext = createContext();

export const LoaderContext = createContext();

function App() {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <LoaderContext.Provider value={{ globalLoading, setGlobalLoading }}>
      <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </MenuContext.Provider>
    </LoaderContext.Provider>
  );
}

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const { globalLoading, setGlobalLoading } = useContext(LoaderContext);

   useEffect(() => {
    setGlobalLoading(true);

    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isLogin && globalLoading && <Loader />}
      {!isLogin && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/mis-boletos" element={<PrivateRoute><MisBoletos /></PrivateRoute>} />
        <Route path="/boleto-detalle/:id" element={<PrivateRoute><BoletoDetalle /></PrivateRoute>} />
        <Route path="/transfer-detalle" element={<PrivateRoute><TransferDetalle /></PrivateRoute>} />
        <Route path="*" element={<Redirector />} />
      </Routes>
    </>
  );
}

export default App;