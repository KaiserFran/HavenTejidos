export const ProductoCard = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-img" />
      <h2>{nombre.toUpperCase()}</h2>
      <p>{descripcion}</p>
      <p>💲{precio}</p>
    </div>
  );
};

//export default ProductoCard;
