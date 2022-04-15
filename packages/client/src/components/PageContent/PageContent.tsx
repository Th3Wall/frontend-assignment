import * as React from "react";
import {Col, Layout, Row} from "antd";
import Pokemons from "../Pokemons/Pokemons";

const PageContent = () => {
    return (
        <Layout.Content className="PageContent">
            <Row style={{ height:"100%" }}>
                <Col span={24}>
                    <Pokemons />
                </Col>
            </Row>
        </Layout.Content>
    );
}

export default PageContent;