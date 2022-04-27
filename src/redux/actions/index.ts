import {createAction} from "@reduxjs/toolkit";

export const fetching = createAction("FETCHING");

export const fetched = createAction("FETCHED");

export const fetchError = createAction("FETCH_ERROR");