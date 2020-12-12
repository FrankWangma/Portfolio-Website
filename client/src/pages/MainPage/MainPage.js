import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./MainPage.module.css";

const MainPage = () => {
    return(
    <div className={styles.MainPage}>
        <Typography variant='h1'>
        Frank Wang Ma
        </Typography>
        <Typography variant='h2' >
            Software Engineer
        </Typography>
    </div>
    );
};

export default MainPage;
