import "./index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/config";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("world")
);