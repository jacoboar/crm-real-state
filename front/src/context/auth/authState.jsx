import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import { axiosClient } from '../../helpers';
import { tokenAuth } from '../../helpers';

import { GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN_REQUEST } from '../../types';

function AuthState(props) {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    msg: null,
    loading: false
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const getUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await axiosClient.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };

  const login = async (data) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    
    try {
      const response = await axiosClient.post('/api/auth', data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      getUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'error',
      };

      dispatch({
        type: LOGIN_FAILURE,
        payload: alert,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        getUser,
        login,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
