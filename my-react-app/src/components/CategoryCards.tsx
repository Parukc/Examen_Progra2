import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryCards() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} mt={2} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Card onClick={() => navigate("/categorias")} sx={{ cursor: "pointer" }}>
          <CardContent>
            <Typography variant="h6">Listado de Categorías</Typography>
            <Typography variant="body2">
              Consulta todas las categorías existentes.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* los otros dos cards pueden estar igual o sin navegación */}
    </Grid>
  );
}
