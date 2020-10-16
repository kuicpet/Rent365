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
                          <Navbar.Text>Signed in as: <a href="#">John Doe</a></Navbar.Text>
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
                            <NavDropdown.Item>
                                <Link to="/signin" className="text-center signin">Login</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/signup" className="text-center signup">Create an Account</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link to="/orders" className="text-center orders">Orders</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/saved-items" className="text-center saved-items">Saved Items</Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link>
                              <Link to="/cart" className="mx-5 cart">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                  <span className="mx-1">Cart</span>
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