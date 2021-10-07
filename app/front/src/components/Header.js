import React, {useState} from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



const useStyles = makeStyles(() => ({
    appbar: {
        // color: '#bbdefb',
        // color: '#FFF',
        // justifyContent: 'right'
    },
    toolbar:{
        // color:'#FFF',
        justifyContent: 'space-between'
        // justifyContent: 'right'
    },
    button: {
        color: '#FFF',
        justifyContent: 'right'
    },
    liStyle: {
        listStyleType: 'none',
    },
    ulStyle: {
        padding: 0
    }

}));


// const list = () => (
//     <>
//     <List>
//         {['Inbox', 'Starrred', 'Send emil', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//                 <ListItemText primaty={text} />
//             </ListItem>
//         ))}
//     </List>
//     </>
// )




const Header = () => {


    // ログインしている場合
    const buttonRender = () => {
        let buttonDom

        buttonDom = <Button  className={classes.button} variant='inherit'>LOGOUT</Button>

        return buttonDom
    }
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }


    return (

    <>
        <Drawer anchor='left' open={open} onClose={toggleOpen}>
            <ul className={classes.ulStyle}>
                <li className={classes.liStyle}>
                    <Link to={`/schedule`}>SCHEDULE</Link><br/>
                    <Link to={`/review`}>REVIEW</Link><br/>
                    <Link to={`/cheer`}>CHEER</Link><br/>
                    <Link to={`/feedback`}>FEEDBACK</Link><br/>
                    <Link to={`/calendar`}>CALENDAR</Link>
                </li>
            </ul>
            {/* <List>
                {['Inbox', 'Starrred', 'Send emil', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primaty={text} />
                    </ListItem>
                ))}
            </List> */}
        </Drawer>




        <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleOpen} />
                    </IconButton>
                    <Typography variant="h6">
                            With Us
                    </Typography>
                    {buttonRender()}
                </Toolbar>
        </AppBar>

    </>
    )
}




export default Header;
