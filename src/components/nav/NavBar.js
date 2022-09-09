import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                Today
            </li>
            <li className="navbar__item">
                Projects
            </li>


            {
                (localStorage.getItem("projectminion_token") !== null) ?
                    <li className="nav-item">
                        <button className="btn"
                            onClick={() => {
                                localStorage.removeItem("projectminion_token")
                                localStorage.removeItem("userId")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        
        </ul>
    )
}