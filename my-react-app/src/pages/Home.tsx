import { Container } from "@mui/material";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import CategoryCards from "../components/CategoryCards";
import Alerts from "../components/Alerts";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Header />
      <ImageSlider />
      <CategoryCards />
      <Alerts />
    </Container>
  );
}