import React from 'react';
import { Drawer, Hidden, List, ListItemIcon, ListItemText, Typography, ListItem, Grid, Divider} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { SocialIcon  } from 'react-social-icons'

const useStyles = makeStyles((theme) => ({

    MuiDrawer: {
        backgroundColor: "#2b2b2b",
        width: 240,
    },

    Text: {
        color: "#ffffff"
    },
    
    Icon: {
        color: "#ffffff"
    },

    SocialMedia: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    divider: {
        background: '#fff',
    },
}));

const ListItemButton = withStyles({
    root: {
      "&:hover": {
        backgroundColor: "#525252",
      },
      color: "white"
    },
    selected: {}
  })(ListItem);



const Sidebar = (props) => {
    const classes = useStyles();
      
    const drawerContent = (
        <div>
            <List onClick={props.isDrawerOpen? props.handleDrawerToggle : null}>
                <ListItem> 
                    <Typography classes={{root: classes.Text}} variant="h5">Frank Wang Ma</Typography>
                </ListItem>
                {props.SidebarNames.map((text, index) => (
                    <div>
                    <Link to={props.Links[index]} style={{ textDecoration: 'none' }}>
                        <ListItemButton button key={text}>
                            <ListItemIcon classes={{root: classes.Icon}}>{props.SidebarIcons[index]}</ListItemIcon>
                            <ListItemText classes={{root: classes.Text}}>{text}</ListItemText>
                        </ListItemButton>
                    </Link>
                    </div>
                ))}
            </List>
            <Divider classes={{root: classes.divider}} variant="middle" />
            <Grid container
             direction="row"
             justify="center"
             alignItems="stretch">
                    <SocialIcon style={{margin: '20px 0 0 10px', height: 35, width: 35}} url="https://www.linkedin.com/in/frank-wangma/" bgColor="#ffffff"/>
                    <SocialIcon style={{margin: '20px 0 0 10px', height: 35, width: 35}} url="https://github.com/FrankWangma" bgColor="#ffffff"/>
            </Grid>
        </div>
    )

    return (
        <div>
            <Hidden smUp implementation="css">
                <Drawer
                    variant='temporary'
                    classes={{paper: classes.MuiDrawer}}
                    anchor='left'
                    open={props.isDrawerOpen}
                    onClose={props.handleDrawerToggle}
                >
                    {drawerContent}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    variant='permanent'
                    classes={{paper: classes.MuiDrawer}}
                >
                    {drawerContent}
                </Drawer>
            </Hidden>
        </div>
    )
}


export default Sidebar