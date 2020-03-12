import { ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
import { v4 as uuid } from 'uuid';
const INITIAL_STATE = {
  posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { ...action.payload.post, id: uuid(), comments: {} }
      return { ...state, posts: { ...state.posts, newPost } };

    case UPDATE_POST:
      let postId = action.payload.id;
      let updatedPost = {...action.payload.post, comments: [...state.posts[postId].comments] } ;
      let updatedPosts = {...state.posts, [postId]: updatedPost}
      return {...state, posts: {...updatedPosts}};

    case REMOVE_POST:

      return state;

    case ADD_COMMENT:

      return state;
    case REMOVE_COMMENT:

      return state;

    default:
      return state;
  }

}

export default rootReducer;