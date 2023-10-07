import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteUser, readUser, userList } from '../redux/Action/AllAction'
const User = () => {
    const userListData = useSelector((state) => state.allUser.userData)


    console.log("userListData", userListData);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const addUser = () => {
        navigate("/registration")
    }

    // Details

    const readUserList = (id) => {
        navigate("/details/" + id)
    }

    // Update User

    const editUserList = (id) => {
        navigate("/edit/" + id)
    }

    // delete
    const deleteUserList = (id) => {
        // console.log(id, "id");
        dispatch(deleteUser(id));
    }

    const allUserListData = () => {
        dispatch(userList(userListData))
    }

    useEffect(() => {
        allUserListData();
    }, [userListData])
    return (
        <div>
            <div>
                <button
                    onClick={addUser}
                    className='btn btn-primary mb-3 mt-3'
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
                            userListData && userListData.map((item, index) => {

                                const { id, fname, lname, username } = item

                                return < tr key={index} >
                                    <td>{index}</td>
                                    <td>{fname}</td>
                                    <td>{lname}</td>
                                    <td>{username}</td>
                                    <td><button
                                        onClick={() => readUserList(id)}
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