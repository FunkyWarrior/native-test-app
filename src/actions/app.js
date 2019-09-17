import * as types from "../actionTypes/actionsTypes";

import {URL} from '../appData/axios'


const getDataRequest = () => ({
    type: types.GET_DATA
});

const getDataRequestSuccess = payload => ({
    type: types.GET_DATA_SUCCESS,
    payload
});

const getDataRequestFail = payload => ({
    type: types.GET_DATA_FAIL,
    payload
});

export const getData = () => {
    return async dispatch => {
        dispatch(getDataRequest());
        try {
            const { data } = await URL.get();
            dispatch(getDataRequestSuccess(data));
        } catch (error) {
            dispatch(getDataRequestFail(error));
        }
    };
};


