import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: "33vw",
        marginLeft: '240px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '50%',
        marginLeft: '25%'
    }
  }));

const Home = ()  => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Paper className={classes.paper}>Hi! I am Frank!</Paper>
        </div>
    )
}

export default Home