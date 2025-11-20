import React from "react";

export default function ProductoCard({ producto, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(producto)}>
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="card-img"
      />

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p>${producto.precio}</p>
    </div>
  );
}
