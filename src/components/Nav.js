import './Nav.css';
import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <header>
        <Link to="/" className="logo">Homework<span>Buddy</span></Link>
        <nav>
          <Link to="/auth/signup"><div>Signup</div></Link>
          <Link to="/auth/login" className="btn btn-login"><div>Login</div></Link>
        </nav>
      </header>
    </>
  )
}

export default Nav;