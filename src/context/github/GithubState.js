import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

// create initial state
const GithubState = props => {
  const initialState = {
    // our global state for anything to do with github
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // actions follow:
  // Search Users

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubReducer.Provider
      // takes in props:
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubReducer.Provider>
  );
};

export default GithubState;
