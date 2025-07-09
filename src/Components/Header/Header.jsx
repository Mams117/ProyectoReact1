import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MiniMarket
            </Typography>
            <Button color="inherit" LinkComponent={Link} to="/ProyectoReact1">
              Inicio
            </Button>
            <Button color="inherit" LinkComponent={Link} to="/Card">
              Info
            </Button>
            <Button color="inherit" LinkComponent={Link} to="/Form">
              Agregar registros
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
