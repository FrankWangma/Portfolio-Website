import React from "react";
import { Typography, Grid, Card } from "@material-ui/core";
import styles from './ProjectSlider.module.css'

const ProjectSlider = (props) => {
    const {backgroundColor, title } = props.content;
    
    return(
        <Card className={styles.Card} style={{backgroundColor: backgroundColor}}>
            <h3>{title}</h3>
        </Card>
    );
}

export default ProjectSlider;