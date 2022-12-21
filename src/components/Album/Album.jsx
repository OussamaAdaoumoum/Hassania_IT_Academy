import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import AlbumModal from "../AlbumModal/AlbumModal";

// const cards = [1, 2, 3, 4];

const theme = createTheme();

// function expand() {
//   console.log("HAHAHAHAHA");
// }

export default function Album() {

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () =>{
      setIsOpen(!isOpen)
  }


  const [formations, setFormations] = useState([]);
  useEffect(() => {
    getFormations();
  }, []);

  function getFormations() {
    axios.get('http://localhost/API/getFormation.php').then(function(response) {
        console.log(response.data);
        setFormations(response.data);

    });
}

  return (
    // <div className="pt-28">

    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 25 }} maxWidth="lg">
          <Grid container spacing={4}>
            {formations.map((formation) => (
              <Grid item key={formations.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardMedia
                    component="img"
                    width="100px"
                    height="250px"
                    sx={{
                      // 16:9
                      pt: "6.25%"
                    }}
                    image="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=2000"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                      {formation.formationName}
                    </Typography>
                    <Typography>
                      {formation.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  onClick={() => setIsOpen(true)} size="small">
                      View
                    </Button>
                    <Modal open={isOpen}>
        <AlbumModal handleModal={handleModal} formation={formations}/>
        {/* {console.log('haahiya data', formations)} */}
            </Modal>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    // </div>
  );
}