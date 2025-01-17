import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_PROJECT_ERROR, ADD_PROJECT_LOADING, ADD_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS, REMOVE_PROJECT_ERROR, REMOVE_PROJECT_LOADING, REMOVE_PROJECT_SUCCESS } from "./project.types";


let token = localStorage.getItem("token") || ""

export const getProjectAPI = () => async (dispatch) => {

  dispatch({ type: GET_PROJECT_LOADING });
  try {
    const res = await axios.get(`https://team-toggl.herokuapp.com/projects`, {
      headers: {
        token: token
      }
    })
    dispatch({ type: GET_PROJECT_SUCCESS, payload: res.data })
    // console.log("Outside projects")
  } catch (er) {
    dispatch({ type: GET_PROJECT_ERROR })
  }

}


export const postProjectAPI = (data) => async (dispatch) => {
  // console.log(data, "postdata")

  dispatch({ type: ADD_PROJECT_LOADING});
  try {
    const res = await axios.post(`https://team-toggl.herokuapp.com/projects`, data, {
      headers: {
        token: token
      }
    })

    dispatch(getProjectAPI())
    dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data })

  } catch (er) {
    dispatch({ type: ADD_PROJECT_ERROR })
    console.log(er)
  }
}


export const removeProjectAPI = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_PROJECT_LOADING });
  try {
    let res = await axios.delete(`https://team-toggl.herokuapp.com/projects/${id}`, {
      headers: {
        token: token
      }
    });
    dispatch(getProjectAPI())
    dispatch({ type: REMOVE_PROJECT_SUCCESS, payload: res.data });
    return res.data
  } catch (e) {
    dispatch({ type: REMOVE_PROJECT_ERROR })
  }
}





