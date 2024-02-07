import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";


function App() {
  return (
    <>
    <Header/>
    <Container>
      <main>
        <HomeScreen/>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
