import { ADD_LOG, DELETE_LOG, GET_LOGS, LOGS_ERROR } from "../actions/types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
};

const logReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false,
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false,
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false,
            }
        case LOGS_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default logReducer;

