import { Container, Typography } from "@mui/material";

export default function NuevaCategoria() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5">Aquí se crea una nueva categoría</Typography>
    </Container>
  );
}

// === src/components/Navbar.tsx ===
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#28a745" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Categorías
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/categorias">Categorías</Button>
          <Button color="inherit" component={Link} to="/nueva-categoria">Nueva Categoría</Button>
          <Button color="inherit">Cálculos</Button>
          <Button color="inherit">Información</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}