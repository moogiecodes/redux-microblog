import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
    <nav>
      <NavLink to="/">
        Microblog
      </NavLink>
      <div>
        <NavLink to="/">
          Blog
        </NavLink> {' '}
        <NavLink to="/new">
          Add a new post
        </NavLink>
      </div>
    </nav>
    )
  }

export default NavBar;