// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { editUser } from '../redux/Action/AllAction'
// import { useParams } from 'react-router-dom'
// const Edit = () => {
//     const { id } = useParams();
//     const [userList, setUser] = useState({
//         fname: "",
//         lname: "",
//         username: "",
//         password: "",

//     })
//     const dispatch = useDispatch();
//     // const userListItem = useSelector((state) => state.allUser.selectedUser)
//     // const { fname, lname, username } = userListItem

//     const selectedUser = useSelector((state) =>
//         state.allUser.userData.find((user) => user.id === id)
//     );

//     if (selectedUser) {
//         setUser(selectedUser);
//     }
//     const handelSubmit = (e) => {
//         e.preventDefault();
//         dispatch(editUser(userList))
//     }
//     return (
//         <div>
//             <h2>Edit User</h2>
//             <form onSubmit={handelSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="firstname">First Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="exampleInputfirstname"
//                         name="firstname"
//                         value={userList.fname || ''}
//                         onChange={(e) => setUser({ ...userList, fname: e.target.value })}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="lastname">Last Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="exampleInputlastname"
//                         name="lastname"
//                         value={userList.lname || ''}
//                         onChange={(e) => setUser({ ...userList, lname: e.target.value })}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="exampleInputusername"
//                         name="username"
//                         value={userList.username || ''}
//                         onChange={(e) => setUser({ ...userList, username: e.target.value })}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Save Changes
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Edit






import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/Action/AllAction';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const { id } = useParams();
    const [userList, setUser] = useState({
        fname: '',
        lname: '',
        username: '',
        password: '',
    });
    const dispatch = useDispatch();
    // const selectHook = useSelector()
    const navigate = useNavigate()

    // const userDataItem = useSelector((state) => state.allUser.userData)
    // console.log(userDataItem, "userDataItem");
    // setUser(userDataItem)

    // const getitem = () => {
    //     const userDataItem = selectHook((state) => state.allUser.userData)
    //     setUser(userDataItem)
    // }


    const selectedUser = useSelectedUserData(id);

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [id, selectedUser]);


    useEffect(() => {
        // getitem()
    }, [id])
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser(userList));
        navigate("/")
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputfirstname"
                        name="firstname"
                        value={userList.fname || ''}
                        onChange={(e) => setUser({ ...userList, fname: e.target.value })}
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
                        onChange={(e) => setUser({ ...userList, lname: e.target.value })}
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
                        onChange={(e) => setUser({ ...userList, username: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Edit;


function useSelectedUserData(id) {
    console.log(id, "id user ");
    return useSelector((state) =>
        state.allUser.userData.find((user) => user.id === id)
    );
}


// function useSelectedUserData(id) {
//     console.log(id, "id user ");
//     return useSelector((state) =>
//         state.allUser.selectedUser
//     );
// }









