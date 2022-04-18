import * as React from 'react';
import { Layout } from 'antd';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageContent from "./components/PageContent/PageContent";

const App = () => {
    return (
        <Layout className="App">
            <Navbar />
            <PageContent />
            <Footer />
        </Layout>
    );
}

export default App;