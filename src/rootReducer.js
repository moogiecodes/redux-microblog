import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_TITLES,
  GET_POST
} from './actions/actionTypes';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  posts: {},
  titles: []
}

export default function rootReducer(state = INITIAL_STATE, action) {
  let postId;
  let p;
  switch (action.type) {

    case GET_POST:
      return { ...state, posts: { ...state.posts, [action.post.id]: action.post } };

    case ADD_POST:
      return { ...state, posts: { ...state.posts, [action.payload.id]: { ...action.payload.post, comments: [] } } };

    case UPDATE_POST:
      postId = action.payload.id;
      let updatedPost = {
        ...action.payload.post,
        comments: [...state.posts[postId].comments]
      };
      return { posts: { ...state.posts, [postId]: updatedPost } }

    case REMOVE_POST:
      let postStateCopy = { ...state.posts };
      delete postStateCopy.posts[postId];
      console.log(postStateCopy);
      return postStateCopy;

    case ADD_COMMENT:
      return {
        ...state, posts: { ...state.posts, [action.postId]: { ...state.posts[action.postId], comments: [...state.posts[action.postId].comments, action.comment] } }
      };

    case REMOVE_COMMENT:
      // postId = action.postId;
      // let commentId = action.commentId;
      // let commentStateCopy = [...state.posts[postId].comments];

      // let updatedComments = commentStateCopy.filter(c => c.id !== commentId)
      p = state.posts[postId];
      console.log("in REMOVE_COMMENT, state.posts[postId] is...", p);
      return {
        ...state,
        // [action.postId]: {
        //   ...p,
        //   comments: p.comments.filter(c => c.id !== action.commentId)
        // }
        posts: {
          ...state.posts,
          [action.postId]: { ...p, comments: p.comments.filter(c => c.id !== action.commentId) }
        }
      }

    // return {
    //   ...state,
    //   [action.postId]: {
    //     ...p, comments: p.comments.filter(c => c.id !== action.commentId)
    //   }
    // };

    case GET_TITLES:
      return { ...state, titles: [...action.titles] };

    default:
      return state;
  }

}
