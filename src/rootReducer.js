import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_TITLES,
  GET_POST
} from './actions/actionTypes';

const INITIAL_STATE = {
  posts: {},
  titles: []
}

export default function rootReducer(state = INITIAL_STATE, action) {
  let p;
  switch (action.type) {

    case GET_POST:
      return { ...state, posts: { ...state.posts, [action.post.id]: action.post } };

    case ADD_POST:
      return { ...state, posts: { ...state.posts, [action.payload.id]: { ...action.payload.post, comments: [] } } };

    case UPDATE_POST:
      let updatedPost = {
        ...action.post,
        comments: [...state.posts[action.post.id].comments]
      };
      return { ...state, posts: { ...state.posts, [action.post.id]: updatedPost } }

    case REMOVE_POST:
      let posts = { ...state.posts };
      delete posts[action.postId];
      return { ...state, posts };

    case ADD_COMMENT:
      p = state.posts[action.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: { ...p, comments: [...p.comments, action.comment] }
        }
      };

    case REMOVE_COMMENT:
      p = state.posts[action.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: { ...p, comments: p.comments.filter(c => c.id !== action.commentId) }
        }
      }

    case GET_TITLES:
      return { ...state, titles: [...action.titles] };

    default:
      return state;
  }

}
