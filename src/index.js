import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Get the root element
const root = document.getElementById("root");

// Use ReactDOM.createRoot instead of ReactDOM.render
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
