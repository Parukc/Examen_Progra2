import { Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

export default function Categorias() {
  const categorias = ["Geometría", "Álgebra", "Estadística"];

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Listado de Categorías
      </Typography>

      <Paper variant="outlined">
        <List>
          {categorias.map((cat, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={cat} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}