import React, { useState, useEffect } from 'react'
import { Card, CardActionArea, CardHeader, CardMedia, CardContent, Grid, makeStyles, Typography, Grow, CircularProgress } from '@material-ui/core'
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
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
}));

const Projects = () => {
    const classes = useStyles();
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
      fetch('https://gitconnected.com/v1/portfolio/frankwangma')
        .then(res => res.json())
        .then(user => {
          setUser(user);
        });
    }, []);

    let timeout = 300;

    const expandCard = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
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
            <Typography variant='h3'>My Projects</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}
            >
                {user.projects.map((project, index) => (
                    <Grid item xs
                    justify="center">
                        <Grow in={true} timeout={timeout * (index + 1)}>
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
                        </Grow>
                    </Grid>
                ))}
            </Grid>
            {selectedProject ? <ProjectModal open={openModal} handleClose={handleClose} project={selectedProject}/> : <div />}
        </div>
    )
}

export default Projects