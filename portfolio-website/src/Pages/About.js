import { Chip, Typography } from '@material-ui/core'
import React from 'react'
import WorkTimeline from '../Components/WorkTimeline'

const About = ({user}) => {
    
    return (
        <div>
            <Typography variant='h1'>Who Am I?</Typography>
            <Typography>I am a Software Engineer who has recently graduated from <b>The University of Auckland</b> with first class honours.</Typography>
            
            <Typography variant='h3'>Skills</Typography>
            <div>
                {user.skills.map(skill => (
                    <Chip label={skill.name}/>
                ))}
            </div>
            <WorkTimeline user={user}/>
        </div>
    )
}

export default About