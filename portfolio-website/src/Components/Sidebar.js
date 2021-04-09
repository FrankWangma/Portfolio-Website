import React from 'react';
import { Drawer, Hidden, List, ListItemIcon, ListItemText, Typography, ListItem} from '@material-ui/core';
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
        margin: 20
    }
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
                    <Link to={props.Links[index]}>
                        <ListItemButton button key={text}>
                            <ListItemIcon classes={{root: classes.Icon}}>{props.SidebarIcons[index]}</ListItemIcon>
                            <ListItemText classes={{root: classes.Text}}>{text}</ListItemText>
                        </ListItemButton>
                    </Link>
                ))}
            </List>
            
            <div style={{margin: '20px'}}>
                <SocialIcon style={{marginLeft: '10px'}} url="https://www.linkedin.com/in/frank-wangma/" bgColor="#ffffff"/>
                <SocialIcon style={{marginLeft: '10px'}} url="https://github.com/FrankWangma" bgColor="#ffffff"/>
                <SocialIcon style={{marginLeft: '10px'}} url="https://www.facebook.com/frank.wangma.5/" bgColor="#ffffff"/>
            </div>
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