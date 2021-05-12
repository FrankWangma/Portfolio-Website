import React from 'react';
import {Typography, Button, Grid, Slide} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import backgroundImage from '../Components/background.png'

const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginLeft: '2%'
    },
    backgroundImage: image => ({
        backgroundImage: `url("${image.url}")`,
        backgroundColor: '#121212',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize:'contain',
        alignItems: 'left',
    }),
    container: {
        margin: '20px',
        marginBottom: '50px'
    },
    subtext: {
        opacity: '60%',
        marginBottom: '20px'
    }
  }));
  
const Home = ({user})  => {

    const image = { url: backgroundImage};
    const classes = useStyles(image);
    return (
        <div className={`${classes.root} ${classes.backgroundImage}`} style={{ 
            }}>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Slide in={true} direction='right' timeout={500}>
                        <Typography variant='h1'>{user.basics.name}</Typography>
                    </Slide>
                    <Slide in={true} direction='right' timeout={500}>
                        <Typography variant='h3' className={classes.subtext}>{user.basics.label}</Typography>
                    </Slide>
                </Grid>
                
                <Slide in={true} direction='right' timeout={500}>
                <Grid item xs='6'>
                    <Link to='/files/CV-Frank-Wang-Ma.pdf' target='_blank' download style={{ textDecoration: 'none' }}>
                        <Button variant='contained' endIcon={<GetAppIcon />}>Download CV</Button>
                    </Link>
                </Grid>
                
                </Slide>
            </Grid>
        </div>
    )
}

export default Home