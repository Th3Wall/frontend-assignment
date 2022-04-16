import "./Navbar.scss";
import * as React from "react";
import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Navbar = () => {
    return (
        <Layout.Header className="Navbar">
            <h3 className="Navbar__title">PokèDex</h3>
            <a className="Navbar__ref" href="https://github.com/Th3Wall/frontend-assignment" target="_blank" rel="noopener noreferrer">
                <GithubOutlined className="Navbar__ref--icon" />
            </a>
        </Layout.Header>
    );
}

export default Navbar;