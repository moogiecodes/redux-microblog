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

export function removePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}
// export function removePost(id) {
//   return {
//     type: REMOVE_POST,
//     payload: { id }
//   }
// }

export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

function addComment(postId, comment) {
  console.log("in addComment action creator, comment is...", comment);
  return { type: ADD_COMMENT, postId, comment };
}

export function getTitlesFromApi() {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}`);
    return dispatch(getTitles(res.data));
  }
}

function getTitles(titles) {
  return { type: GET_TITLES, titles }
}

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(res.data));
  };
}

function getPost(post) {
  return {
    type: GET_POST,
    post
  };
}
