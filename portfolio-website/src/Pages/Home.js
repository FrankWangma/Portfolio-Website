import React from 'react';
import {Typography, Paper, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: "33vw",
        marginLeft: '240px',
    },
    container: {
        margin: '20px',
        marginBottom: '50px'
    }
  }));

const Home = ()  => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs='12'>
                    <Typography variant='h1'>Hi! I am Frank!</Typography>
                </Grid>
                <Grid item xs='6'>
                    <Link to='/files/CV-Frank-Wang-Ma.pdf' target='_blank' download style={{ textDecoration: 'none' }}>
                        <Button variant='contained'>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home