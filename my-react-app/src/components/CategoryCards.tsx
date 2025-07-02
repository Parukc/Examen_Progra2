import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function CategoryCards() {
  return (
    <Grid container spacing={2} mt={2} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Listado de Categorías</Typography>
            <Typography variant="body2">
              Consulta todas las categorías existentes.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Crear Categoría</Typography>
            <Typography variant="body2">
              Agrega nuevas categorías matemáticas o temáticas.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Cálculos Básicos</Typography>
            <Typography variant="body2">
              Realiza áreas y cálculo de IVA.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}