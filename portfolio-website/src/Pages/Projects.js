import React from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((project) => ({
    parent: {
        margin: '5%'
    },
    root: {
        maxWidth: 500,
        height: 'auto'
    },
    link: {
        display: 'block',
        maxWidth: 500,
        textDecoration: 'none'
    },
    image: {
        height: 'auto',
        maxHeight: '300px',
        width: 'auto',
        maxWidth: '500px',
    }
}));

const Projects = ({user}) => {
    const classes = useStyles();

    return ( 
        <div className={classes.parent}>
            <Typography variant='h3'>My Projects</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                {user.projects.map(project => (
                    
                    <Grid item xs
                    justify="center">
                        <a className={classes.link} target='_blank' rel="noreferrer noopener" href={project.githubUrl}>
                            <Card className={classes.root}>
                                {console.log(project)}
                                <CardActionArea>
                                    <CardHeader title={project.name} />
                                    <CardMedia>
                                        <img className={classes.image} src={project.images[0].resolutions.mobile.url} alt={''} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.summary}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects