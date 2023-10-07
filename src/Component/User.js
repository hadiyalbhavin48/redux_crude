import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userList, deleteUser } from '../redux/actions/Action'
const User = () => {

    // const [userData, setUserData] = useState([])
    const [fleg, setFleg] = useState(false)
    const navigate = useNavigate();

    // console.log(userData, "userData");
    const userListData = useSelector((state) => state.allUser.userData)
    console.log("userListData", userListData);
    // const alluserData = userListData.allUser.userData
    // const { id, fname, lname, username, avatar } = alluserData
    // console.log(alluserData, "id");
    const dispatch = useDispatch();
    const addUser = () => {
        navigate("/registration")
    }

    // Edit 

    const editUserList = (id) => {
        // console.log(id, "id");
        navigate("/edit/" + id)
    }

    // Details

    const readUser = (id) =>{
        
    }
    // delete 

    const deleteUserList = (id) => {
        const requestBody = {
            id: id
        };
        // console.log(requestBody, "requestBody");

        const userDeleteList = axios.delete("https://www.melivecode.com/api/users/delete", {
            data: requestBody
        })
            .then((res) => {
                // console.log(res, "delete Res");
                setFleg(true)
            })
        dispatch(deleteUser(id))
        // console.log(userDeleteList, "userDeleteList");
    }

    useEffect(() => {
        const usData = axios.get("https://www.melivecode.com/api/users")
            .then((res) => {
                const resData = res.data
                // console.log(resData, "User");
                dispatch(userList(resData))
                // setUserData(resData)
            })
            .catch((err) => {
                console.log(err.message);
            })
        // dispatch(userList(userData));
    }, [])

    return (
        <div>
            <div>
                <button
                    onClick={addUser}
                    className='btn btn-primary mb-3'
                    style={{ float: "left" }}
                >Create User</button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userListData && userListData.map((item) => {

                                const { id, fname, lname, username, avatar } = item

                                return < tr key={id} >
                                    <td>{id}</td>

                                    <td>{fname}</td>
                                    <td>{lname}</td>
                                    <td>{username}</td>
                                    <td><button
                                        onClick={() => readUser(id)}
                                        className='btn btn-info'
                                    >Details</button></td>
                                    <td><button
                                        onClick={() => editUserList(id)}
                                        className='btn btn-primary'>Edit</button></td>

                                    <td><button
                                        onClick={() => deleteUserList(id)}
                                        className='btn btn-danger'>Delete</button></td>
                                </tr>

                            })
                        }
                    </tbody>
                </Table>
            </div>

        </div >
    )
}

export default User