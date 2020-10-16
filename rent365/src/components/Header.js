import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const isLoggedIn = () => {
        let user = localStorage.getItem("jwtToken");
        let loggedInUser = JSON.parse(user);
        return loggedInUser !== null;
    };

    const signOut = () => {
        localStorage.removeItem("user");
        return history.push("/");
    }

    return (
         <Navbar bg="light" expand="lg">
             <Navbar.Brand>
                 <Link to="/" className="navbar-brand">Rent365</Link>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto text-center">
                     {isLoggedIn() ? (
                        <Nav>
                          <Nav.Link>
                              <Link to="/" className="mx-5">Home</Link>
                          </Nav.Link>
                          <Nav.Link>
                              <Link
                                to="/"
                                className="mx-2"
                                onClick={() => signOut()}
                              >Sign Out</Link>
                          </Nav.Link>
                        </Nav>
                     ) : (
                       <Nav>
                          <Nav.Link>
                              <Link to="/" className="mx-5">Home</Link>
                          </Nav.Link>
                          <NavDropdown title="Login">
                            <NavDropdown.Item>
                                <Link to="/signin" className="text-center">Login</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/signin" className="text-center">Create an Account</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link to="/" className="text-center">Orders</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/signin" className="text-center">Saved Items</Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link>
                              <Link to="/cart" className="mx-5">Cart</Link>
                          </Nav.Link>
                       </Nav>
                     )}
                 </Nav>
             </Navbar.Collapse>
         </Navbar>
    );
}

export default Header;