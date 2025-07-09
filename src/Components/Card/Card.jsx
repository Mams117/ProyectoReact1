import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
export const Cards = () => {
  return (
    <>
      <Card sx={{ maxWidth: 400, margin: "2rem auto" }}>
        <CardMedia
          component="img"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O9VF_gl5gExy_--7EGKP_0q3IyeAMI9VTg&s"
          alt="Imagen decorativa"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ¡Bienvenido!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Esta es tu app para gestionar registros de navegación. Puedes ver
            los registros existentes o agregar nuevos usando la barra de
            navegación superior.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver registros</Button>
          <Button size="small">Agregar uno nuevo</Button>
        </CardActions>
      </Card>
    </>
  );
};
