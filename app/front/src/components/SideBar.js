import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    button: {
        color: '#FFF',
        justifyContent: 'right'
    } 
}));


const SideBar = () => {
    const HomeButtonRender = () => {
        let HomeButtonDom
        HomeButtonDom = <button>HOME</button>
        return HomeButtonDom
    }
    const PostButtonRender = () => {
        let PostButtonDom
        PostButtonDom = <button>POST</button>
        return PostButtonDom
    }
    const SupportButtonRender = () => {
        let SupportButtonDom
        SupportButtonDom = <button>SUPPORT</button>
        return SupportButtonDom
    }
    const FeedBackButtonRender = () => {
        let FeedBackButtonDom
        FeedBackButtonDom = <button>FEEDBACK</button>
        return FeedBackButtonDom
    }
    const CalendarButtonRender = () => {
        let CalendarButtonDom
        CalendarButtonDom = <button>CALENDAR</button>
        return  CalendarButtonDom

    }


    const classes = useStyles();

    return (
        <>
            {HomeButtonRender()}
            {PostButtonRender()}
            {SupportButtonRender()}
            {FeedBackButtonRender()}
            {CalendarButtonRender()}
        </>
    )
}

export default SideBar;
