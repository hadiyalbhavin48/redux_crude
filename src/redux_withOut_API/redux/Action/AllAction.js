
// import { ActionType } from "../constants/action-type"

import { ActionType } from "../../constants/action-type";
export const userList = (user) => {
    return {
        type: ActionType.ALL_USER,
        payload: user
    }
}

export const addUser = (useradd) => {
    // console.log("Action useradd", useradd);
    return {
        type: ActionType.ADD_USER,
        payload: useradd
    }
}

export const deleteUser = (userdelete) => {
    console.log("userdelete", userdelete);
    return {
        type: ActionType.DELETE_USER,
        payload: userdelete
    }
}

export const editUser = (useredit) => {
    // console.log(useredit, "useredit");
    return {
        type: ActionType.EDIT_USER,
        payload: useredit
    }
}

export const readUser = (userread) => {
    return {
        type: ActionType.READ_USER,
        payload: userread
    }
}