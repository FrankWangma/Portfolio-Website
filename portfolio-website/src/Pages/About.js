import React from 'react';
import { Grid, Grow, makeStyles, Slide, Typography } from '@material-ui/core'
import { CSharpIcon, CssIcon, JavaIcon, JSIcon, NodejsIcon, ReactIcon } from '../Components/Icons'
import WorkTimeline from '../Components/WorkTimeline'

const useStyles = makeStyles( () => ({
    parent: {
        marginTop: '5%'
    },
    divider: {
        marginTop: '80px',
    },
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
        justifyContent: 'center',
        margin: '0 50px 0 50px'
    },
}))

const About = ({user}) => {

    let timeout = 200

    const classes = useStyles()
    const DevIcons = [<CSharpIcon />, <JavaIcon />, <JSIcon />, <ReactIcon />, <CssIcon />, <NodejsIcon />]
    const DevNames = ["C Sharp", "Java", "Javascript", "React", "CSS", "NodeJS"]
    
    return (
        <div className={classes.parent}>
            <Grow in={true}>
                <div>
                    <Typography variant='h2' className={classes.text}>Who Am I?</Typography>
                    <Typography className={classes.text}>{user.basics.summary}</Typography>
                    <div className={classes.divider}/>
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