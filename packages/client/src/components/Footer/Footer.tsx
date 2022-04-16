import "./Footer.scss"
import * as React from "react";
import { Layout } from "antd";

const Footer = () => (
    <Layout.Footer className="Footer" >
        <h4 className="Footer__text">All rights reserved - Made with ❤️ by&nbsp;
        <a href="https://www.github.com/Th3Wall" target="_blank" rel="noreferrer">Th3Wall</a>
        </h4>
    </Layout.Footer>
)

export default Footer;