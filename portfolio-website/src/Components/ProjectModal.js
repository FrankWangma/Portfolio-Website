import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Chip, DialogActions, Button, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: project => ({
        maxWidth: project.images[0].resolutions.desktop.width
    }),

    closeButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        backgroundColor: '#927fbf'
    }

  }));

const ProjectModal = ({open, handleClose, project}) => {
    const classes = useStyles(project);

    const handleOpenLink = () => {
        window.open(project.githubUrl, '_blank');
    }
    return (
        <Dialog 
            className={classes.root}
            open={open} 
            onClose={handleClose} 
            fullWidth
            maxWidth="xl"
        >
            <DialogTitle className={classes.title}>
               <Box display="flex" alignItems="center">
                    <Box flexGrow={1} >{project.name}</Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
            </Box>
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
            <DialogActions>
                <Button onClick={handleOpenLink}>
                    Open on GitHub
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProjectModal; 