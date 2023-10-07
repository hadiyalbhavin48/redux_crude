import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/actions/Action'
const Registration = () => {
    const [userData, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: "bhavin@gmail.com",
        avatar: "https://www.melivecode.com/users/cat.png"
    })
    // console.log(user);

    const registrationUser = useSelector((state) => state)
    console.log(registrationUser, "registrationUser");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault();

        const userList = axios.post("https://www.melivecode.com/api/users/create", userData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                // console.log(res.data.user, "res");
                dispatch(addUser(res.data.user))
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message, "Registration Error");
            })
    }
    return (
        <div>
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...userData, fname: e.target.value })}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...userData, lname: e.target.value })}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneno">User Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...userData, username: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setUser({ ...userData, password: e.target.value })}
                            className="form-control"
                            id="exampleInputPassword"
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" name="create">
                        Sign up
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Registration