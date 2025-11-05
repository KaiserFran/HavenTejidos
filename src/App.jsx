import Navbar from "./components/navbar";
import Container from "./components/container";
import ProductosList from "./components/ProductosList";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ProductosList />
      </Container>
    </>
  );
}

export default App;
