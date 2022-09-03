import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ProjectMinion } from "./components/ProjectMinion.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ProjectMinion />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)