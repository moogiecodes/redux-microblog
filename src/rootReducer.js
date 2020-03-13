import { ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  let postId;

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        [uuid()]: { ...action.payload.post, comments: {} }
      };
      return { ...state, posts: { ...state.posts, ...newPost } };

    case UPDATE_POST:
      console.log("UPDATE POST", action.payload)
      postId = action.payload.id;
      let updatedPost = {
        ...action.payload.post,
        comments: { ...state.posts[postId].comments }
      };
      let updatedPosts = { ...state.posts, [postId]: updatedPost }
      return { ...state, posts: { ...updatedPosts } };

    case REMOVE_POST:
      // NG - Fixed delete but not sure if this is deep copy??
      postId = action.payload.id;
      
      let postStateCopy = { ...state };
      delete postStateCopy.posts[postId]
      return { ...postStateCopy };

    case ADD_COMMENT:
      postId = action.payload.postId;
      let newComment = {
        [uuid()]: { ...action.payload.comment }
      };
      let updatedPostWComments = {
        ...state.posts[postId],
        comments: { ...state.posts[postId].comments, newComment }
      };
      let updatedPostsWComments = {
        ...state.posts,
        [postId]: updatedPostWComments
      }
      return { updatedPostsWComments };

    case REMOVE_COMMENT:
      postId = action.payload.id;
      let commentId = action.payload.commentId;
      let commentStateCopy = { ...state.posts.comments };
      delete commentStateCopy[commentId];

      let deletedCommentPost = {
        ...state.posts[postId],
        comments: { ...commentStateCopy }
      };
      let replacePosts = { ...state.posts, [postId]: deletedCommentPost }
      return { ...state, posts: { ...replacePosts } };

    default:
      return state;
  }

}

export default rootReducer;