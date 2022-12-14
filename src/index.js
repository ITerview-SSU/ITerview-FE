import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { RecoilRoot } from "recoil";

// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter >
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
