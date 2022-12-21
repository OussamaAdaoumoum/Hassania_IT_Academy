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
import { GrClose } from "react-icons/gr";


const cards = [1];

const theme = createTheme();


export default function AlbumModal({ handleModal, formation}) {
  // console.log('haaahya formation', formation[0]);
  return (
    <div>

    
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <main onClick={handleModal}>
        <Container sx={{ py: 18 }} maxWidth="lg">
          <Grid container spacing={4}>
            {/* {formation.map((formation) => ( */}
              <Grid item key={formation[0].id} xs={12} md={4}>
                <Card
                  sx={{
                    height: "500px",
                    width: "300%",
                    flex: 1,
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <CardMedia
                    component="img"
                    width="150px"
                    height="150px"
                    sx={{
                      // 16:9
                      pt: "6.25%"
                    }}
                    image="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=2000"
                  />
                  <CardContent sx={{ flexGrow: 3 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      {formation[0].description}
                      <ul>
                        <li>{formation[0].title1}</li>
                        <li>{formation[0].title2}</li>
                        <li>{formation[0].title3}</li>
                        <li>{formation[0].title4}</li>
                        <li>{formation[0].title5}</li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            {/* ))} */}
                      {/* <div
            className="transition duration-700 absolute top-2 right-4 rounded-full bg-gray-200 hover:bg-gray-500 p-1 "
            onClick={handleModal}
          >
            {" "}
            <GrClose />
          </div> */}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </div>
  );
}