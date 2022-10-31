import React from "react";
import { Link } from "react-router-dom";

export default function Navbar (){
    return(
        <div className="Nav">
        <div className="apptitle">
            <h1>Dog App</h1>
        </div>
        <div className="links">
            <Link to ='/home'>Home</Link>
            <Link to ='/images'>Images</Link>
            <Link to ='/about'>About</Link>
        </div>
        </div>
    )
}