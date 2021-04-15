import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: project => ({
        maxWidth: project.images[0].resolutions.desktop.width
    }),

  }));

const ProjectModal = ({open, handleClose, project}) => {
    const classes = useStyles(project);
    return (
        <Dialog 
            className={classes.root}
            open={open} 
            onClose={handleClose} 
            fullWidth
            maxWidth="xl"
        >
            <DialogTitle>
                {project.name}
            </DialogTitle>
            <DialogContent>
                <img src={project.images[0].resolutions.desktop.url} alt={''} />
                <DialogContentText className={classes.text}>
                    {project.summary}
                </DialogContentText>
                <DialogContentText className={classes.text}>
                    {project.description}
                </DialogContentText>
                {project.languages.map(language => (
                    <Chip label={language}/>
                ))}
                {project.libraries.map(library => (
                    <Chip label={library}/>
                ))}
            </DialogContent>
        </Dialog>
    )
}

export default ProjectModal; 