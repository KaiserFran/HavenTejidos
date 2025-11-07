import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { ProductosList } from "./components/ProductosList";

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
