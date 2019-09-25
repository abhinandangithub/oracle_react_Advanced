import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
    const activeStyle = { color: "red" };
    return (
        <div>
            <NavLink target="_blank" activeStyle={activeStyle} to="/" exact >Home</NavLink> {" | "}
            <NavLink target="_blank" activeStyle={activeStyle} to="/about">About</NavLink> {" | "}
            <NavLink target="_blank" activeStyle={activeStyle} to="/courses">Courses</NavLink> {" | "}
        </div>
    );
}

export default HeaderPage;