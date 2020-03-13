import { ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  let postId;
  let p;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        [uuid()]: { ...action.payload.post, comments: [] }
      };
      return { posts: { ...state.posts, ...newPost } };

    case UPDATE_POST:
      postId = action.payload.id;
      let updatedPost = {
        ...action.payload.post,
        comments: [...state.posts[postId].comments]
      };
      return { posts: {...state.posts, [postId]: updatedPost}}
  

    case REMOVE_POST:
      postId = action.payload.id;

      let postStateCopy = { ...state };
      delete postStateCopy.posts[postId]
      return { ...postStateCopy };

    case ADD_COMMENT:
      postId = action.payload.postId;
      let newComment = { id: uuid(), ...action.payload.comment }

      p = state.posts[postId];

      return {
        posts: {
          ...state.posts,
          [postId]: {
            ...p,
            comments: [...p.comments, newComment]
          }
        }
      }

    case REMOVE_COMMENT:
      postId = action.payload.postId;
      let commentId = action.payload.commentId;
      let commentStateCopy = [...state.posts[postId].comments];

      let updatedComments = commentStateCopy.filter(c => c.id !== commentId)

      p = state.posts[postId];
      return {
        posts: {
          ...state.posts,
          [postId]: {
            ...p,
            comments: [...updatedComments]
          }
        }
      }
    default:
      return state;
  }

}

export default rootReducer;