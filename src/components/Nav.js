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
      <section>
        <h1 class="mb-5 fw-bold">
          Your <span>Buddy </span>
          while you <span>Study</span>.
        </h1>
        <div className="products">
          <Link to="/quizzes"><div>Quizzes</div></Link>
          <Link to="/discussions"><div>Discussions</div></Link>
          <Link to="/quizzes"><div>Lessons</div></Link>
        </div>
      </section>
    </>
  )
}

export default Nav;