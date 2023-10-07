
import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

//Error mate nu function
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const geUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const FetchUserList = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        // setTimeout(() => {
        axios.get("http://localhost:8000/user")
            .then(res => {
                const userList = res.data;
                // console.log(userList, "res");
                dispatch(geUserList(userList))
            }).catch((err) => {
                dispatch(failRequest(err.message))
            })
        // }, 1000);

    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const Removeuser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete("http://localhost:8000/user/" + code)
            .then((res) => {
                // console.log("delete res ", res);
                dispatch(deleteUser());
            }).catch((err) => {
                // console.log(err.message);
                dispatch(failRequest(err.message))
            })
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}


export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.post("http://localhost:8000/user", data)
            .then((res) => {
                // console.log("add res ", res.data);
                dispatch(addUser());

                toast.success('User Added successfully.')
            }).catch((err) => {
                // console.log(err.message);
                dispatch(failRequest(err.message))
            })
    }
}

export const getUserObj = (data) => {
    console.log("get User data ", data);
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}

export const FetchUserObj = (code) => {
    // console.log("code", code);
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get("http://localhost:8000/user/" + code)
            .then((res) => {
                // console.log("userObj", res.data);
                // dispatch(getUserObj(res.data))
                dispatch(getUserObj(res.data));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}

export const FunctionUpdateUser = (userdata, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put("http://localhost:8000/user/" + code, userdata)
            .then((res) => {
                console.log("Update Res ", res.data);
                dispatch(updateUser(res.data))
            })
            .catch((err) => {
                // console.log(err.message);

            })
    }
}