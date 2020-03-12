import { ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: { post }
  }
}

export function updatePost(post, id) {
  return {
    type: UPDATE_POST,
    payload: {id, post}
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: {}
  }
}


export function addComment(post) {
  return {
    type: ADD_COMMENT,
    payload: {}
  }
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: {}
  }
}