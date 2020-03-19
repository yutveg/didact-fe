import axiosWithAuth from "../../utils/axiosWithAuth";
import beURL from "../../utils/beURL";

export const GET_MY_PROFILE_START = "GET_MY_PROFILE_START";
export const GET_MY_PROFILE_SUCCESS = "GET_MY_PROFILE_SUCCESS";
export const GET_MY_PROFILE_FAIL = "GET_MY_PROFILE_FAIL";
export const EDIT_MY_PROFILE_START = "EDIT_MY_PROFILE_START";
export const EDIT_MY_PROFILE_SUCCESS = "EDIT_MY_PROFILE_SUCCESS";
export const EDIT_MY_PROFILE_FAIL = "EDIT_MY_PROFILE_FAIL";
export const ADD_MY_PROFILE_START = "ADD_MY_PROFILE_START";
export const ADD_MY_PROFILE_SUCCESS = "ADD_MY_PROFILE_SUCCESS";
export const ADD_MY_PROFILE_FAIL = "ADD_MY_PROFILE_FAIL";

const baseURL = `${beURL}auth/`;

export const getMyProfile = () => dispatch => {
  dispatch({ type: GET_MY_PROFILE_START });

  axiosWithAuth()
    .get(`${baseURL}my-profile`)
    .then(res => {
      dispatch({ type: GET_MY_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_MY_PROFILE_FAIL, payload: err.response });
    });
};

export const addMyProfile = () => dispatch => {
  dispatch({ type: ADD_MY_PROFILE_START });

  axiosWithAuth()
    .get(`${baseURL}my-profile`)
    .then(res => {
      dispatch({ type: ADD_MY_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_MY_PROFILE_FAIL, payload: err.response });
    });
};

export const editMyProfile = changes => dispatch => {
  dispatch({ type: EDIT_MY_PROFILE_START });
  axiosWithAuth()
    .put(`${baseURL}my-profile`, changes)
    .then(res => {
      dispatch({ type: EDIT_MY_PROFILE_SUCCESS, payload: res.changes });
    })
    .catch(err => {
      dispatch({ type: EDIT_MY_PROFILE_FAIL, payload: err.response });
    });
};
