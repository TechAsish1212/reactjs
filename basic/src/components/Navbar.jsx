import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Contact", to: "/contact" },
    ]

    return (
        <nav className="nav">
            <div>
                <h2>Logo</h2>
            </div>
            <ul className="nav-items">
                {navItems.map((item, ind) => (
                    <li key={ind}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

