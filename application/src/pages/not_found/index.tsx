import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box

      width="50%"
      height="50vh"
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
    >
      <Typography textAlign="center" variant="h4" color="white">
        Page Not Found
      </Typography>
      <Button
        onClick={() => navigate("/tickets")}
        size="large"
        variant="contained"
        color="secondary"
        style={{ borderRadius: 16, margin: 16 }}
      >
        Home
      </Button>
    </Box>
  );
}
