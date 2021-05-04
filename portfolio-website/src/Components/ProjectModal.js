import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Chip, DialogActions, Button, IconButton, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {   
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: project => ({
        maxWidth: project.images[0].resolutions.desktop.width,
        color: '#FFFFFF',
        opacity: '60%',
    }),

    titleText: {
        color: '#FFFFFF',
    },

    closeButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        backgroundColor: '#927fbf'
    },
    button: {
        color: '#927fbf'
    },
    dialogContent: {
        backgroundColor: '#2b2b2b',
    },
    chip: {
        backgroundColor: '#927fbf',
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
                    <Box flexGrow={1} ><Typography className={classes.titleText} variant='h4'>{project.name}</Typography></Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
            </Box>
            </DialogTitle>
            <DialogContent className={classes.dialogContent} dividers>
                <img src={project.images[0].resolutions.desktop.url} alt={''} />
                <DialogContentText className={classes.text}>
                    {project.summary}
                </DialogContentText>
                <DialogContentText className={classes.text}>
                    {project.description}
                </DialogContentText>
                {project.languages.map(language => (
                    <Chip className={classes.chip} label={language}/>
                ))}
                {project.libraries.map(library => (
                    <Chip className={classes.chip}  label={library}/>
                ))}
            </DialogContent>
            <DialogActions className={classes.dialogContent}>
                <Button className={classes.button} size='large' onClick={handleOpenLink}>
                    Open on GitHub
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProjectModal; 