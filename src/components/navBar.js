import React from "react";
import logo from "../assets/images/webart.png";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const menuItems = [
    {
        id: 1,
        path:"/",
        label: "Merchandising",
    },
    {
        id: 2,
        path:"/category/Libros",
        label: "Libros",
    },
    {
        id: 3,
        path:"/category/Cuadernos",
        label: "Cuadernos",
    },
    {
        id: 4,
        path:"/category/Tazas",
        label: "Tazas",
    },
    {
        id: 5,
        path:"/category/Agendas",
        label: "Agendas",
    }
];

const NavBar = () => {
    return (
        <header className="row block center">
            <img src={logo} alt="logo" />
            <h1>Braian Ruiz Ilustraciones</h1>
            <div>
            {menuItems.map((item)=>(
                <Link to={item.path} key={item.id}>
                    {item.label}
                </Link>
            ))}
            </div>
            <CartWidget/>
        </header>
    )
}

export default NavBar