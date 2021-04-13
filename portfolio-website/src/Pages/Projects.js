import React from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Projects = ({user}) => {
    return ( 
        <div>
            <Typography variant='h3'>My Projects</Typography>
            <div>
                {user.projects.map(project => (
                    <a target='_blank' rel="noreferrer noopener" href={project.githubUrl}>
                        <Card>
                            {console.log(project)}
                            <CardActionArea>
                                <CardHeader title={project.name} />
                                <CardMedia>
                                    <img src={project.images[0].resolutions.mobile.url} alt={''} />
                                </CardMedia>
                            </CardActionArea>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects