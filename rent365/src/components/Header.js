import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const Header = () => {
    const history = useHistory();
    const [user, setUser] = useState([]);


    const isLoggedIn = (props) => {
        let user = localStorage.getItem("user");
        let loggedInUser = JSON.parse(user);
        console.log(loggedInUser);
        return loggedInUser !== null;
    };


    const signOut = () => {
        localStorage.removeItem("user");
        return history.push("/");
    }

    return (
         <Navbar bg="light" expand="lg" fixed="top">
             <Navbar.Brand>
                 <Link to="/" className="navbar-brand">Rent365</Link>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto text-center">
                     {isLoggedIn() ? (
                        <Nav>
                          <Nav.Link>
                              <Link to="/" className="mx-5 home">Home</Link>
                          </Nav.Link>
                          <Navbar.Text>Signed in as: <span></span></Navbar.Text>
                          <Nav.Link>
                              <Link
                                to="/"
                                className="mx-2 signout"
                                onClick={() => signOut()}
                              >Sign Out</Link>
                          </Nav.Link>
                        </Nav>
                     ) : (
                       <Nav>
                          <Nav.Link>
                              <Link to="/" className="mx-5 home">Home</Link>
                          </Nav.Link>
                          <NavDropdown title="Login" class="drop">
                            <NavDropdown.Item className="my-1">
                                <Link to="/account/signin" className="text-center signinBtn px-5 py-1 signinBtn">Login</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/account/signup" className="text-center signupBtn px-3 py-1 signupBtn">Create an Account</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link to="/orders" className="text-center orders">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    <span className="mx-2">Orders</span>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/saved-items" className="text-center saved-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="mx-2">Saved Items</span>
                                </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link>
                              <Link to="/cart" className="mx-5 cart">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                  <span className="mx-2">Cart</span>
                              </Link>
                          </Nav.Link>
                       </Nav>
                     )}
                 </Nav>
             </Navbar.Collapse>
         </Navbar>
    );
}

export default Header;