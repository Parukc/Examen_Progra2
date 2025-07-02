import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box bgcolor="#f1f5f9" p={4} borderRadius={2} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Gestión de Categorías
      </Typography>
      <Typography variant="body1">
        Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
      </Typography>
    </Box>
  );
}