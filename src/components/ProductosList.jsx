import { productos } from "../data/productos";
import { ProductoCard } from "./productoCard";

export const ProductosList = () => {
  return (
    <div className="lista">
      {productos.map((p) => (
        <ProductoCard key={p.id} {...p} />
      ))}
    </div>
  );
};
export default ProductosList;
