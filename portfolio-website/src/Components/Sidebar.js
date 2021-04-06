import React from 'react';
import { Drawer, List, ListItem, Typography} from '@material-ui/core';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { SocialIcon  } from 'react-social-icons'

const useStyles = makeStyles({
    MuiDrawer: {
        backgroundColor: "#2b2b2b",
        width: 240,
    },

    Text: {
        color: "#ffffff"
    },
});

const Sidebar = (props) => {
    const classes = useStyles();
      
    return (
        <Drawer
            variant="permanent"
            classes={{paper: classes.MuiDrawer}}
        >
            <List >
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
        </Drawer>
    )
}


export default Sidebar