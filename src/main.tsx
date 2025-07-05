import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";
import { ApolloProvider } from "@apollo/client";
import client from "hooks/apolloclient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
