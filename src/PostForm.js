import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// ADD REACTSTRAP 

function PostForm({ addPost, isEditing, updatePost, deletePost, id }) {
  const history = useHistory();

  const INITIAL_STATE = {
    title: "",
    description: "",
    body: ""
  };
  const [form, setForm] = useState(INITIAL_STATE);

  const saveNew = e => {
    e.preventDefault();
    addPost(form);
    history.push('/');
  };

  const saveEdit = e => {
    e.preventDefault();
    updatePost(form, id);
    history.push('/');
  };

  const deleteButton = e => {
    e.preventDefault();
    deletePost(id);
    history.push('/');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  let newFormButtons = (
    <span>
      <button className="NewPostForm-button" onClick={saveNew}>Save</button>
      <Link to="/">
        <button className="Cancel-button">Cancel</button>
      </Link>
    </span>
  );

  let editFormButtons = (
    <span>
      <button className="NewPostForm-button" onClick={saveEdit}>Save</button>
      <button className="Cancel-button" onClick={deleteButton}>Delete</button>
    </span>
  );
  return (
    <div className="container">
      <form className="NewPostForm">
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description: </label>
        <input
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <label htmlFor="body">Body: </label>
        <input
          id="body"
          name="body"
          value={form.body}
          onChange={handleChange}
        />
        {isEditing ? editFormButtons : newFormButtons}
      </form>
    </div>
  )
}

export default PostForm;