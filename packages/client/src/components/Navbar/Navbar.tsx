import "./Navbar.scss";
import * as React from "react";
import { Layout } from "antd";

const Navbar = () => {
    return (
        <Layout.Header className="Navbar">
            <h3>Pokedex</h3>
        </Layout.Header>
    );
}

export default Navbar;