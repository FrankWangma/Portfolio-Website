import React, {useState, useEffect } from 'react';
import {Typography, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import { CSSTransition } from 'react-transition-group';
import './Animations.css';

const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: "33vw",
    },
    container: {
        margin: '20px',
        marginBottom: '50px'
    }
  }));

const Home = ()  => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs='12'>
                    <CSSTransition 
                        in={loaded} 
                        timeout={500}
                        classNames='fade'
                        unmountOnExit
                    >
                        <Typography variant='h1'>Hi! I am Frank!</Typography>
                    </CSSTransition>
                </Grid>
                <Grid item xs='6'>
                    <Link to='/files/CV-Frank-Wang-Ma.pdf' target='_blank' download style={{ textDecoration: 'none' }}>
                        <Button variant='contained' endIcon={<GetAppIcon />}>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home