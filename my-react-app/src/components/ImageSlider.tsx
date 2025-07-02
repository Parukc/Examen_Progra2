import { Box } from "@mui/material";

export default function ImageSlider() {
  return (
    <Box mt={4} display="flex" justifyContent="center">
      <img
        src="https://content.r9cdn.net/rimg/dimg/5c/7d/bc41e7f0-city-35586-162e4be9769.jpg?crop=true&width=1020&height=498"
        alt="Vista"
        style={{ width: "100%", maxWidth: 800, borderRadius: 10 }}
      />
    </Box>
  );
}