import './Nav.css';
import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <header>
        <Link to="/" className="logo">Homework<span>Buddy</span></Link>
        <nav>
          <Link to="/login"><div>Login</div></Link>
          <Link to="/register" className="btn btn-login"><div>Signup</div></Link>
        </nav>
      </header>
    </>
  )
}

export default Nav;