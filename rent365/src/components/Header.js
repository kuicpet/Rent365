import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
      <div className="row header">
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
                          <Nav.Link>
                              <Link to="/signin" className="mx-2">Login</Link>
                          </Nav.Link>
                          <Nav.Link>
                              <Link to="/signup" className="mx-5">Cart</Link>
                          </Nav.Link>
                       </Nav>
                     )}
                 </Nav>
             </Navbar.Collapse>
         </Navbar>
      </div>
    );
}

export default Header;