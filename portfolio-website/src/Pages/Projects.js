import React, { useState } from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import ProjectModal from '../Components/ProjectModal';


const useStyles = makeStyles(() => ({
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
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const expandCard = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

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
                        <Card className={classes.root}>
                            <CardActionArea onClick={() => expandCard(project)}>
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
                    </Grid>
                ))}
            </Grid>
            {selectedProject ? <ProjectModal open={openModal} handleClose={handleClose} project={selectedProject}/> : <div />}
        </div>
    )
}

export default Projects