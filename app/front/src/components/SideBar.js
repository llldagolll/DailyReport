import React from "react";



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
