import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";

export default function Categorias() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Listado de Categorías
      </Typography>

      <Card>
        <CardContent sx={{ p: 0 }}>
          <List disablePadding>
            <ListItem divider>
              <ListItemText primary="Geometría" />
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Álgebra" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Estadística" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}