import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
}  from "../actionTypes/actionsTypes";

const defaultState = {
    data:null,
    error:null,
    isFetching:false,
};

export const appReducer = (state = defaultState, action) => {
    switch(action.type){

        case GET_DATA : {
            return {
                ...state,
                isFetching: true
            };
        }

        case GET_DATA_SUCCESS : {
            return {
                ...state,
                data:action.payload,
                isFetching: false
            };
        }

        case GET_DATA_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            };
        }

        default:
            return state
    }
};