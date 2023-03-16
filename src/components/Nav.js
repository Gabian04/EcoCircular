import React from "react";
import {NavLink} from 'react-router-dom'

export default () =>(
    <div className="Nav">
        <h1>Economia Circular</h1>
        
        <NavLink className="Nav_Link" to = "products">Products</NavLink>
        <NavLink className="Nav_Link" to = "stock">Stock</NavLink>
        <NavLink className="Nav_Link" to = "add">Add</NavLink>

    </div>
)