import reactDom from "react-dom";
import App from "./App.jsx"
import {BrowserRouter} from "react-router-dom"
reactDom.render(
    <BrowserRouter><App></App>
</BrowserRouter>
,document.getElementById("root"))