import React from "react";
import logo from "../assets/images/webart.png";
import CartWidget from "./cartWidget";


const menuItems = [
    {
        id: 1,
        label: "Libros",
    },
    {
        id: 2,
        label: "Cuadernos",
    },
    {
        id: 3,
        label: "Tazas",
    },
    {
        id: 4,
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
                <a href="/" className="nav-item" key={item.id}>{item.label}</a>
            ))}
            </div>
            <CartWidget/>
        </header>
    )
}

export default NavBar