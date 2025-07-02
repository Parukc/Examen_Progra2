import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import CategoryCards from "./components/CategoryCards";
import Alerts from "./components/Alerts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Header />
        <ImageSlider />
        <CategoryCards />
        <Alerts />
      </Container>
      <Footer />
    </>
  );
}

export default App;
