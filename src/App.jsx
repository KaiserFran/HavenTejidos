import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { ProductosList } from "./components/ProductosList";
import { ProductDetail } from "./components/productDetail";

function App() {
  const [detalle, setDetalle] = useState(null);

  return (
    <>
      <Navbar />

      <Container>
        <h1 style={{ textAlign: "center" }}>STOCK</h1>
        <ProductosList onSelectProduct={setDetalle} />
      </Container>

      {detalle && (
        <ProductDetail 
          producto={detalle}
          onClose={() => setDetalle(null)}
        />
      )}
    </>
  );
}

export default App;

