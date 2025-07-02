import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#28a745" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Categorías
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Categorías</Button>
        <Button color="inherit">Nueva Categoría</Button>
        <Button color="inherit">Cálculos</Button>
        <Button color="inherit">Información</Button>
      </Toolbar>
    </AppBar>
  );
}