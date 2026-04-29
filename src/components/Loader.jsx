import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>

      <h2>Recuperando los detalles de la orden.</h2>
      <p>Por favor espera un momento.</p>
    </div>
  );
}