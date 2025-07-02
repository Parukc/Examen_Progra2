import { Container, Typography } from "@mui/material";

export default function Informacion() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Información del Sistema
      </Typography>
      <Typography align="center">
        Este sistema permite gestionar categorías y realizar cálculos sencillos para practicar migración a ReactJS.
      </Typography>
    </Container>
  );
}