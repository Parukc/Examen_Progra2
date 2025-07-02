import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { useCategoria } from "../context/CategoriaContext";

export default function Categorias() {
  const { categorias } = useCategoria();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Listado de Categorías
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableBody>
            {categorias.map((cat, index) => (
              <TableRow key={index}>
                <TableCell>{cat.nombre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
