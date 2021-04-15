import { Chip, Typography } from '@material-ui/core'
import React from 'react'
import { CSharpIcon, CssIcon, JavaIcon, JSIcon, NodejsIcon, ReactIcon } from '../Components/Icons'
import WorkTimeline from '../Components/WorkTimeline'

const About = ({user}) => {
    
    return (
        <div>
            <Typography variant='h1'>Who Am I?</Typography>
            <Typography>I am a Software Engineer who has recently graduated from <b>The University of Auckland</b> with first class honours.</Typography>
            
            <Typography variant='h3'>Skills</Typography>
            <div>
                <CSharpIcon />
                <JavaIcon />
                <JSIcon />
                <ReactIcon />
                <CssIcon />
                <NodejsIcon />
            </div>
            <WorkTimeline user={user}/>
        </div>
    )
}

export default About