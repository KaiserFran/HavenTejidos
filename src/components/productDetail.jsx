import React, { useEffect } from "react";

export const ProductDetail = ({ producto, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!producto) return null;

  const { nombre, descripcion, precio, imagen } = producto;

  return (
    <div className="detail-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Cerrar detalle">✕</button>
        {imagen && <img src={imagen} alt={nombre} className="detail-img" />}
        <h2 className="detail-title">{nombre}</h2>
        <p className="detail-desc">{descripcion}</p>
        <p className="detail-price">💲{precio}</p>

        <div className="detail-actions">
          <button className="btn primary">Agregar al carrito</button>
          <button className="btn ghost" onClick={onClose}>Volver</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;