// src/actions/userActions.js
import axios from 'axios';

// Action types
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// Action creators
export const loginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post('https://api.example.com/login', credentials);
      const user = response.data.user;

      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
