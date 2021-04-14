import React from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((project) => ({
    root: {
        maxWidth: 600,
    },
    link: {
        display: 'block',
        maxWidth: 600,
        textDecoration: 'none'
    }
}));

const Projects = ({user}) => {
    const classes = useStyles();

    return ( 
        <div>
            <Typography variant='h3'>My Projects</Typography>
            <div>
                {user.projects.map(project => (
                    <a className={classes.link} target='_blank' rel="noreferrer noopener" href={project.githubUrl}>
                        <Card className={classes.root}>
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