import React from "react";
import "./styles.css";
import logo from "../../assets/images/webart.png";
import CartWidget from "../cartWidget/cartWidget";


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
        <div className="nav">
            <img src={logo} alt="" />
            <h1 className="nav-logo">Braian Ruiz Ilustraciones</h1>
            <div>
            {menuItems.map((item)=>(
                <a href="/" className="nav-item" key={item.id}>
                {item.label}
                </a>
            ))}
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar