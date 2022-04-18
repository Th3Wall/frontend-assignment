import "./Navbar.scss";
import * as React from "react";
import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import pokedexLogo from "../../assets/images/pokedex_logo.png";

const Navbar = () => {
    return (
        <Layout.Header className="Navbar">
            <a className="Navbar__left" href="/">
                <img className="Navbar__logo" src={pokedexLogo} alt="Pokedex Nav Logo" />
                <h3 className="Navbar__title">PokèDex</h3>
            </a>
            <a className="Navbar__right" href="https://github.com/Th3Wall/frontend-assignment" target="_blank" rel="noopener noreferrer">
                <GithubOutlined className="Navbar__icon" />
            </a>
        </Layout.Header>
    );
}

export default Navbar;