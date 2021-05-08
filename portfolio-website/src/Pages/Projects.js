import React, { useState } from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, CardContent, Grid, makeStyles, Typography, Grow, CircularProgress, CardActions, Button } from '@material-ui/core'
import ProjectModal from '../Components/ProjectModal';


const useStyles = makeStyles((theme) => ({
    parent: {
        margin: '5%'
    },
    root: {
        maxWidth: 500,
        height: '100%',
        backgroundColor: '#2b2b2b',
    },
    clickable: {
        maxWidth: 500,
    },
    image: {
        height: ({largestHeight}) => largestHeight,
        width: 'auto',
        maxWidth: '500px',
    },
    title: {
        backgroundColor: '#927fbf',
        color: '#FFFFFF'
    },
    text: {
        color: '#FFFFFF',
        opacity: '60%',
    },
    cardActions: {
        display: 'flex'
    },
    button: {
        color: '#927fbf',
        '&:hover': {
            backgroundColor: "#525252",
          },
    },
    centeredText: {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px'
    },
    
    grid: {
        display: 'flex',
        justifyContent: 'center',
    }

}));

const Projects = ({user}) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    let largestHeight = 0;
    if(user) {
        user.projects.map((project) => {
            const imageResolution = project.images[0].resolutions.mobile.height
            if ( imageResolution > largestHeight) {
                largestHeight = imageResolution;
            }
            return (null);
        })
    }
    
    const classes = useStyles({largestHeight});
    let timeout = 300;

    const expandCard = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const handleOpenLink = (project) => {
        window.open(project.githubUrl, '_blank');
    }


    if(user == null) {
        return (
            <div className={classes.loading}>
                <CircularProgress size={100}/>
            </div>    
        )
    }

    return ( 
        <div className={classes.parent}>
            <Typography variant='h2' className={classes.centeredText}>My Projects</Typography>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh'}}
                spacing={5}
            >
                {user.projects.map((project, index) => (
                    <Grid item
                    justify="center">
                        <Grow in={true} timeout={timeout * (index + 1)}>
                                <Card className={classes.root}>
                                        <CardActionArea className={classes.clickable} onClick={() => expandCard(project)}>
                                                <CardHeader className={classes.title} title={project.name} />
                                                <CardMedia>
                                                    <img className={classes.image} src={project.images[0].resolutions.mobile.url} alt={''} />
                                                </CardMedia>
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                                        {project.summary}
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                        <CardActions className={classes.cardActions}>
                                            <Button className={classes.button} size='large' onClick={() => handleOpenLink(project)}>
                                                Open on GitHub
                                            </Button>
                                        </CardActions>
                                </Card>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
            {selectedProject ? <ProjectModal open={openModal} handleClose={handleClose} project={selectedProject}/> : <div />}
        </div>
    )
}

export default Projects