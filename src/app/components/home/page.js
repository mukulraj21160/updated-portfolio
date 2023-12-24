"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Mukul from "../../assets/mukul.jpg";

export default function page() {
  const styles = {
    main: {
      color: "white",
      padding: "112px 45px 112px 45px",
    },
    greeting: {
      color: "#ffbd39",
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "3px",
      textTransform: "uppercase",
    },
    nameHeading: {
      display: "flex",
      alignItems: "baseline",
      fontSize: "60px",
      fontWeight: "800",
    },
    name: {
      color: "#ffbd39",
      paddingLeft: "20px",
      fontSize: "60px",
      fontWeight: "800",
    },
    role: {
      color: "white",
      fontSize: "30px",
      fontWeight: "400",
    },
    button: {
      fontSize: "12px",
      letterSpacing: "2px",
      fontWeight: "600",
      lineHeight: "1.5",
      padding: "15px 30px 15px 30px",
      backgroundColor: "#ffbd39",
      color: "black",
      textTransform: "none",
      margin: "20px 0px 0px 20px",
      border: "1px solid",
      borderRadius: "40px",
      borderColor: "#ffbd39",
      "&:hover": {
        backgroundColor: "#ffbd39",
        color: "black",
      },
    },
    button2: {
      fontSize: "12px",
      letterSpacing: "2px",
      fontWeight: "600",
      lineHeight: "1.5",
      padding: "15px 30px 15px 30px",
      color: "white",
      textTransform: "none",
      margin: "20px 0px 0px 20px",
      borderRadius: "40px",
      borderColor: "#fff",
      "&:hover": {
        background: "#ffbd39",
        borderColor: "#ffbd39",
        color: "black",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography sx={styles.greeting}>Hello!</Typography>
          <Box sx={styles.nameHeading}>
            I'm <Typography sx={styles.name}>Mukul Raj</Typography>
          </Box>
          <Typography sx={styles.role}>
            "Full Stack Developer | React | Node | JavaScript | HTML/CSS"
          </Typography>
          <Box>
            <Button sx={styles.button} variant="contained">
              HIRE ME
            </Button>
            <Button sx={styles.button2} variant="outlined">
              MY WORKS
            </Button>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Image
              alt="custom image"
              src={Mukul}
              width={300}
              height={300}
              style={{ borderRadius: "20px", marginLeft: "100px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}