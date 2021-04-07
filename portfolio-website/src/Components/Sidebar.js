import React from 'react';
import { Drawer, Hidden, List, ListItem, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
}));



const Sidebar = (props) => {
    const classes = useStyles();
      
    const drawerContent = (
        <List onClick={props.handleDrawerToggle}>
            <ListItem> 
                <Typography classes={{root: classes.Text}} variant="h5">Frank Wang Ma</Typography>
            </ListItem>
            {props.SidebarNames.map((text, index) => (
                <Link to={props.Links[index]}>
                    <ListItem button key={text}>
                        <Typography classes={{root: classes.Text}}>{text}</Typography>
                    </ListItem>
                </Link>
            ))}
            <ListItem>
                <SocialIcon url="https://www.linkedin.com/in/frank-wangma/" bgColor="#ffffff"/>
            </ListItem>
            <ListItem>
                <SocialIcon url="https://github.com/FrankWangma" bgColor="#ffffff"/>
            </ListItem>
            <ListItem>
                <SocialIcon url="https://www.facebook.com/frank.wangma.5/" bgColor="#ffffff"/>
            </ListItem>
        </List>
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