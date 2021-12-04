import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
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
  )
}

export default Header;