import React, { useState } from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import ProjectModal from '../Components/ProjectModal';


const useStyles = makeStyles(() => ({
    parent: {
        margin: '5%'
    },
    root: {
        maxWidth: 500,
        height: '100%',
    },
    clickable: {
        height: '100%',
        maxWidth: 500,
    },
    image: {
        height: 'auto',
        maxHeight: '300px',
        width: 'auto',
        maxWidth: '500px',
    },
    title: {
        backgroundColor: '#927fbf',
    },
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
                alignItems="stretch"
            >
                {user.projects.map(project => (
                    <Grid item xs
                    justify="center">
                        <CardActionArea className={classes.clickable} onClick={() => expandCard(project)}>
                            <Card className={classes.root}>
                                    <CardHeader className={classes.title} title={project.name} />
                                    <CardMedia>
                                        <img className={classes.image} src={project.images[0].resolutions.mobile.url} alt={''} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.summary}
                                        </Typography>
                                    </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
            {selectedProject ? <ProjectModal open={openModal} handleClose={handleClose} project={selectedProject}/> : <div />}
        </div>
    )
}

export default Projects