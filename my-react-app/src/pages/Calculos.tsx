import { Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Calculos() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [valor, setValor] = useState("");

  const calcularTriangulo = () => {
    alert("Área del triángulo: " + (parseFloat(base) * parseFloat(altura)) / 2);
  };

  const calcularRectangulo = () => {
    alert("Área del rectángulo: " + parseFloat(largo) * parseFloat(ancho));
  };

  const calcularIVA = () => {
    alert("IVA (12%): " + (parseFloat(valor) * 0.12).toFixed(2));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cálculos Matemáticos y Comerciales
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>Área de Triángulo</Typography>
      <TextField fullWidth label="Base" value={base} onChange={(e) => setBase(e.target.value)} sx={{ mb: 1 }} />
      <TextField fullWidth label="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} sx={{ mb: 1 }} />
      <Button variant="contained" onClick={calcularTriangulo} sx={{ mb: 3 }}>Calcular Área</Button>

      <Typography variant="h6">Área de Rectángulo</Typography>
      <TextField fullWidth label="Largo" value={largo} onChange={(e) => setLargo(e.target.value)} sx={{ mb: 1 }} />
      <TextField fullWidth label="Ancho" value={ancho} onChange={(e) => setAncho(e.target.value)} sx={{ mb: 1 }} />
      <Button variant="contained" color="success" onClick={calcularRectangulo} sx={{ mb: 3 }}>Calcular Área</Button>

      <Typography variant="h6">Cálculo de IVA (12%)</Typography>
      <TextField fullWidth label="Valor del producto o servicio" value={valor} onChange={(e) => setValor(e.target.value)} sx={{ mb: 1 }} />
      <Button variant="contained" color="success" onClick={calcularIVA}>Calcular IVA</Button>
    </Container>
  );
}