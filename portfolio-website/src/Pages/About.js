import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { CSharpIcon, CssIcon, JavaIcon, JSIcon, NodejsIcon, ReactIcon } from '../Components/Icons'
import WorkTimeline from '../Components/WorkTimeline'

const useStyles = makeStyles( () => ({
    icon: {
        width: 60,
        height: 60,
        margin: 20,
        
    }
}))

const About = ({user}) => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant='h1'>Who Am I?</Typography>
            <Typography>I am a Software Engineer who has recently graduated from <b>The University of Auckland</b> with first class honours.</Typography>
            
            <Typography variant='h3'>Skills</Typography>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="stretch"
            >
                <div className={classes.icon}> <CSharpIcon /> <Typography align='center'>C Sharp</Typography> </div>
                <div className={classes.icon}> <JavaIcon /> <Typography align='center'>Java</Typography> </div>       
                <div className={classes.icon}> <JSIcon /> <Typography align='center'>JavaScript</Typography> </div>
                <div className={classes.icon}> <ReactIcon /> <Typography align='center'>React</Typography> </div>
                <div className={classes.icon}> <CssIcon /> <Typography align='center'>CSS</Typography> </div>
                <div className={classes.icon}> <NodejsIcon /> <Typography align='center'>NodeJS</Typography></div>
            </Grid>
            <WorkTimeline user={user}/>
        </div>
    )
}

export default About