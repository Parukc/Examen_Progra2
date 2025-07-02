import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#2eaf47", p: 2, mt: 4 }} textAlign="center">
      <Typography variant="body2" color="white">
        © 2025 - Sistema de Categorías - Taller Académico
      </Typography>
    </Box>
  );
}
