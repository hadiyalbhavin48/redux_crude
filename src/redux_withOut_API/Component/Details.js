import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { readUser } from '../redux/Action/AllAction';
const Details = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(readUser(id))

    const userList = useSelector((state) => state.allUser.selectedUser)
    console.log("Details", userList);

    const { fname, lname, username } = userList
    return (
        <div>
            <h1>User Details</h1>
            <div className="card d-flex justify-content-center" style={{ width: "18rem" }}>
                {/* <img className="card-img-top" src={userList.coverimage} alt="Card image cap" /> */}
                <div className="card-body">
                    {/* <h5 className="card-title">{userList.id}</h5> */}
                    <p className="card-text">
                        First Name :  {fname}
                    </p>

                    <p className="card-text">
                        Last Name :  {lname}
                    </p>

                    <p className="card-text">
                        User Name :  {username}
                    </p>

                    <NavLink to="/" className="btn btn-primary">Go User List</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Details