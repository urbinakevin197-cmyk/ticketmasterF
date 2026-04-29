import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import { useContext } from "react";
import { MenuContext } from "../../App"; 


export default function Navbar() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const [openSection, setOpenSection] = useState("tickets");

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  
 useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setOpenMenu(false);
    }
  };

  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [setOpenMenu]);

useEffect(() => {
  if (openMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [openMenu]);

  return (
    <>
      {/* MENÚ */}
      {openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)}>
          <div className="menu" onClick={(e) => e.stopPropagation()}>
          <div className="menu-header">
            <h2>Mi Cuenta</h2>
            <button className="close-btn" onClick={() => setOpenMenu(false)}>✕</button>
          </div>

            {/* TODO tu código igual */}

        {/* BIENVENIDA */}
        <div className="welcome">
          <span>¡Bienvenido de vuelta!</span>
          <strong>Hiromi Santiago</strong>
        </div>

        {/* MIS BOLETOS */}
        <div className="section">
          <button className="section-btn" onClick={() => toggle("tickets")}>
            <span>Mis Boletos</span>
            <span className="arrow">⌄</span>
          </button>

          {openSection === "tickets" && (
            <div className="dropdown">
              <p>Ver próximos eventos</p>
              <p>Ver eventos pasados</p>
            </div>
          )}
        </div>

        {/* PERFIL */}
        <div className="section">
          <button onClick={() => toggle("profile")}>
            Mi Perfil
          </button>

          {openSection === "profile" && (
            <div className="dropdown">
              <p>Detalles del perfil</p>
              <p>Facturación</p>
              <p>Seguridad</p>
            </div>
          )}
        </div>

        {/* CONFIG */}
        <div className="section">
          <button onClick={() => toggle("config")}>
            Mi Configuración
          </button>

          {openSection === "config" && (
            <div className="dropdown">
              <p>Alertas</p>
              <p>Preferencias</p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="footer">
          <button>Cerrar sesión</button>
          <button>¿Necesitas ayuda?</button>
        </div>

      </div>
    </div>
      )}
    </>
  );
}