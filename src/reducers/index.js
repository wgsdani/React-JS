import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import UsersReducer from './usersReducer';
import FormReducer from './formReducer';

export default combineReducers({
  //put placeholder here first
  posts: PostsReducer,
  users: UsersReducer,
  forms: FormReducer
});