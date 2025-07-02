import { useState } from "react";
import { Container, Typography, TextField, Button, Alert } from "@mui/material";
import { useCategoria } from "../context/CategoriaContext";

export default function NuevaCategoria() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { agregarCategoria } = useCategoria();

  const handleGuardar = () => {
    if (nombre.trim()) {
      agregarCategoria({ nombre, descripcion });
      setMensaje("Categoría agregada correctamente.");
      setNombre("");
      setDescripcion("");
    } else {
      setMensaje("El nombre es obligatorio.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Registrar Nueva Categoría
      </Typography>

      <TextField
        fullWidth
        label="Nombre de la Categoría"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        multiline
        label="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#28a745" }}
        onClick={handleGuardar}
      >
        Guardar Categoría
      </Button>

      {mensaje && (
        <Alert sx={{ mt: 2 }} severity={mensaje.includes("correctamente") ? "success" : "error"}>
          {mensaje}
        </Alert>
      )}
    </Container>
  );
}
