import * as React from 'react'
import {Link} from "react-router-dom";

export default function NavigationBar() {
    return(
        <nav className="navigationBar">
            <Link to={"/coders"}>Coders</Link>
            <Link to={"/add"}>Add new coder</Link>
        </nav>
    )
}