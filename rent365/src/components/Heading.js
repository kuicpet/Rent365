import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>
                <Link to="/" className="navbar-brand">Rent365</Link>
            </Navbar.Brand>
        </Navbar>
    );
};

export default Heading;