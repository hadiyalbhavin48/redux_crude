
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// const Edit = () => {
//     const { id } = useParams()

//     const [userList, setUser] = useState({
//         fname: "",
//         lname: "",
//         username: "",
//         password: "",
//         email: "bhavin@gmail.com",
//         avatar: "https://www.melivecode.com/users/cat.png",
//         id: id
//     })

//     const navigate = useNavigate();

//     const userListItem = useSelector((state) => state.allUser.userData.find((user) => user.id === id))
//     // console.log(userListItem, "userListItem");



//     // console.log(userListItem.allUser.userData, "Selected Item");
//     // console.log(userList, "user");
//     // useEffect(() => {
//     //     const userData = axios.get("https://www.melivecode.com/api/users/" + id)
//     //         .then((res) => {
//     //             console.log(res.data.user, "Update res");
//     //             setUser(res.data.user)
//     //         })
//     //         .catch((err) => {
//     //             console.log(err.message, "Error Message Update");
//     //         })
//     // }, [])
//     const handelSubmit = (e) => {
//         e.preventDefault();
//         const updateData = axios.put("https://www.melivecode.com/api/users/update", userList)
//             .then((res) => {
//                 // console.log(res, "data Update");
//                 navigate("/")
//             })
//             .catch((err) => {
//                 console.log(err.message, "Update Error");
//             })
//     }

//     return (
//         <div>
//             <div className="container">
//                 <h2>Edit Form</h2>
//                 <form onSubmit={handelSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="firstname">First Name</label>
//                         <input
//                             type="text"
//                             // value={userList.fname}
//                             onChange={(e) => setUser({ ...userList, fname: e.target.value })}
//                             className="form-control"
//                             id="exampleInputfirstname"
//                             name="firstname"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lastname">Last Name</label>
//                         <input
//                             type="text"
//                             // value={userList.lname}
//                             onChange={(e) => setUser({ ...userList, lname: e.target.value })}
//                             className="form-control"
//                             id="exampleInputlastname"
//                             name="lastname"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneno">User Name</label>
//                         <input
//                             type="text"
//                             // value={userList.username}
//                             onChange={(e) => setUser({ ...userList, username: e.target.value })}
//                             className="form-control"
//                             id="exampleInputphoneno"
//                             name="phoneno"
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-primary" name="create">
//                         Save
//                     </button>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Edit






import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../redux/actions/Action';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Access user data from Redux state
    const userListItem = useSelector((state) =>
        state.allUser.userData.find((user) => user.id === id)
    );
    // console.log(userListItem, "userListItem");
    // Initialize the user data with the selected user data
    const [userList, setUserList] = useState(userListItem || {});
    console.log(userList, "userList");
    useEffect(() => {
        //// Check if userListItem is undefined and fetch the user data if needed
        // if (!userListItem) {

        //     fetch(`https://www.melivecode.com/api/users/${id}`)
        //         .then((response) => response.json())
        //         .then((userData) => {
        //             setUserList(userData); // Set the fetched user data
        //         })
        //         .catch((error) => {
        //             console.error('Error fetching user data:', error);
        //         });
        // }
    }, [id, userListItem]);

    const handleEdit = () => {
        // Dispatch an action to update user data in Redux state
        dispatch(editUser(userList));

        // Navigate back to the user list
        navigate('/user');
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputfirstname"
                        name="firstname"
                        value={userList.fname || ''}
                        onChange={(e) => setUserList({ ...userList, fname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputlastname"
                        name="lastname"
                        value={userList.lname || ''}
                        onChange={(e) => setUserList({ ...userList, lname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputusername"
                        name="username"
                        value={userList.username || ''}
                        onChange={(e) => setUserList({ ...userList, username: e.target.value })}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Edit;
