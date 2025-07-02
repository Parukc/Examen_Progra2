import { Box } from "@mui/material";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import CategoryCards from "../components/CategoryCards";
import Alerts from "../components/Alerts";

export default function Home() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, mt: 4 }}>
      <Header />
      <ImageSlider />
      <CategoryCards />
      <Alerts />
    </Box>
  );
}