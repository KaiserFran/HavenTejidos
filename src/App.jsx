import { Navbar } from "./components/NavBar";
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
