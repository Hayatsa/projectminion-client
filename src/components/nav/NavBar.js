import React from "react"
import { Link, useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    const history = useHistory()
    return (
     <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">ProjectMinion</Navbar.Brand>
         
          <Nav>
            <Container>
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
            </Container>
          </Nav>
        </Container>
      </Navbar>
     </>
    )
}

{/* <Nav className="me-auto">
<Nav.Link href="/">Today</Nav.Link>
<Nav.Link href="/projects">Projects</Nav.Link>
</Nav> */}