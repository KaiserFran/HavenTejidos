import React from "react";
import { useProductos } from "../hooks/useProduct";
import ProductoCard from "../components/productoCard";

export const ProductosList = ({ onSelectProduct }) => {
  const { data, isLoading, error } = useProductos();

  if (isLoading) return <p>Cargandooouu...</p>;
  if (error) return <p>ERROR AL CARGAR LOS PRODUCTOS!</p>;

  return (
    <div className="lista">
      {data.map((p) => (
        <ProductoCard 
          key={p.id} 
          producto={p} 
          onSelect={onSelectProduct} 
        />
      ))}
    </div>
  );
};


export default ProductosList;

