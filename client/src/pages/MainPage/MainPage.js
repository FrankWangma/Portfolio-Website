import React from "react";
import { Typography, Grid, Fade } from "@material-ui/core";
import styles from "./MainPage.module.css";
import Header from "../../components/Header";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainPage = () => {
    return(
    <div className={styles.MainPage}>
        <Grid container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <Typography variant='h1'>
                Frank Wang Ma
                </Typography>
                <Typography variant='h2' >
                    Software Engineer
                </Typography>
            </Grid>
        </Grid>
    </div>
    );
};

export default MainPage;
