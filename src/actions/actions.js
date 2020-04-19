import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_TITLES,
  GET_POST
} from './actionTypes';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts'

export function sendPostToAPI(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  };
}

// function addPost(post) {
//   return {
//     type: ADD_POST,
//     post
//   };
// }

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: { post }
  }
}

export function updatePost(post, id) {
  return {
    type: UPDATE_POST,
    payload: { post, id }
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: { id }
  }
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, postId }
  }
}

export function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    payload: { postId, commentId }
  }
}

export function getTitlesFromApi() {
  return async function (dispatch) {
    let res = await axios.get(`${API_URL}`)
    dispatch(getTitles(res.data));
  }
}

function getTitles(titles) {
  return { type: GET_TITLES, titles }
}

// export function getPostFromAPI(id) {
//   return async function (dispatch) {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return dispatch(getPost(response.data));
//   };
// }

// function getPost(post) {
//   console.log("in actions creator, post response frmo API is...", post);
//   return {
//     type: GET_POST,
//     post
//   };
// }
