
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

const initialstate = {
    loading: true,   // loader mate
    userlist: [],
    userobj: {},     // selected user mate
    errmessage: ''   // error message mate
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FAIL_REQUEST:     // error mate
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }

        case GET_USER_LIST:
            // console.log("Reducer Get User", action.payload);
            return {
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj: {}
            }

        case DELETE_USER:
            return {
                ...state,
                loading: false,
                // errmessage: action.payload
            }

        case ADD_USER:
            return {
                ...state,
            }

        case UPDATE_USER:
            return {
                ...state,
                loading: false,
            }

        case GET_USER_OBJ:
            console.log("Get User Reducer ", state);
            return {
                ...state,
                loading: false,
                userobj: action.payload
            }

        default:
            return state;
    }
}