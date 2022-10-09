import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT_FAIL,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../Constants/LogInConstants";
import Data from "../Api";

import { useNavigate } from "react-router-dom";

export const logIN = (user) => async (distpatch, getState) => {
  try {
    distpatch({ type: LOGIN_REQUEST });

    let data = new Data();

    let response = await data.logIn(user);

    distpatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });
  } catch (e) {
    distpatch({
      type: LOGIN_FAIL,
      payload: e,
    });
  }
};

export const logOut = () => async (distpatch) => {
  try {
    distpatch({ type: LOG_OUT_REQUEST });

    let user = "";

    distpatch({
      type: LOG_OUT_SUCCESS,
      payload: user,
    });
  } catch (e) {
    distpatch({
      type: LOG_OUT_FAIL,
      payload: e,
    });
  }
};
