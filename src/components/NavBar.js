import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

function NavBar() {
  return (
    <Jumbotron fluid>
      <NavLink to="/" className='text-decoration-none'>
        <h1 className='display-3'>Microblog</h1>
      </NavLink>
      <span>
        <NavLink exact to="/" className='mr-2 ml-2 text-decoration-none'>
          Blog
        </NavLink>
        <NavLink exact to="/new" className='mr-2 ml-2 text-decoration-none'>
          Add a new post
        </NavLink>
      </span>
      <hr className="my-2" />
      <p>Your centralized site for open "micro" blogging!</p>
    </Jumbotron>
  )
}

export default NavBar;