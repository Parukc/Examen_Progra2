import { Box, Typography } from "@mui/material";

export default function NuevaCategoria() {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4">Crear nueva categoría</Typography>
      <Typography variant="body1">Aquí podrás agregar una nueva categoría.</Typography>
    </Box>
  );
}