import React from "react";
import SideBarButton from "./SideBarButton/SideBarButton";
import "./SideBar.css";
function SideBar() {
    return (
        <div className="" id="SideBar">
            <h2 className="Title">COVID - 19</h2>
            <p className="SubTitle">Latest Updates</p>
            <SideBarButton name="Global State" />
            <SideBarButton name="Global State" />
            <SideBarButton name="Global State" />
            <SideBarButton name="Global State" />
        </div>
    );
}

export default SideBar;
