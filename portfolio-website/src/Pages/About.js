import React from 'react';
import { CircularProgress, Grid, Grow, makeStyles, Slide, Typography } from '@material-ui/core'
import { CSharpIcon, CssIcon, JavaIcon, JSIcon, NodejsIcon, ReactIcon } from '../Components/Icons'
import WorkTimeline from '../Components/WorkTimeline'

const useStyles = makeStyles( () => ({
    icon: {
        width: 75,
        height: 75,
        margin: 20,
        
    },
    timeline: {
        margin: 50
    },
    text: {
        display: 'flex',
        justifyContent: 'center'
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
}))

const About = ({user}) => {

    let timeout = 200

    const classes = useStyles()
    const DevIcons = [<CSharpIcon />, <JavaIcon />, <JSIcon />, <ReactIcon />, <CssIcon />, <NodejsIcon />]
    const DevNames = ["C Sharp", "Java", "Javascript", "React", "CSS", "NodeJS"]

    if(user == null) {
        return (
        <div className={classes.loading}>
            <CircularProgress size={100} />
        </div>)
    }
        
    return (
        <div>
            <Grow in={true}>
                <div>
                    <Typography variant='h1' className={classes.text}>Who Am I?</Typography>
                    <Typography className={classes.text}>I am a Software Engineer who has recently graduated from The University of Auckland with first class honours.</Typography>
                    
                    <Typography variant='h3' className={classes.text}>Skills</Typography>
                </div>
            </Grow>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="stretch"
            >
                {DevIcons.map((icon, index) => (
                    <Slide in={true} direction='down' timeout={timeout * (index + 1)}>
                        <div className={classes.icon}>{icon}<Typography align='center'>{DevNames[index]}</Typography></div>
                    </Slide>
                ))}
            </Grid>
            <div className={classes.timeline}>
                <WorkTimeline user={user}/>
            </div>
        </div>
    )
}

export default About