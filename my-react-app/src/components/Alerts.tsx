import { Box, Alert } from "@mui/material";

export default function Alerts() {
  return (
    <Box mt={3}>
      <Alert severity="success">
        Sistema listo para gestionar categorías y cálculos básicos.
      </Alert>
      <Alert severity="info" sx={{ mt: 2 }}>
        Recuerda ingresar al menos una categoría antes de usar las demás funciones.
      </Alert>
    </Box>
  );
}