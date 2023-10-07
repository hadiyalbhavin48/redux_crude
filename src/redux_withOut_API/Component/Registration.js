import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/Action/AllAction'
import { v4 as uuidv4 } from 'uuid';
const Registration = () => {

    const [user, setUser] = useState({
        id: uuidv4(),
        fname: "",
        lname: "",
        username: "",
        password: "",
    })

    const [err , setError] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()


    // Validation

    const isValid = () =>{

    }
    const handelSubmit = (e) => {
        e.preventDefault();

        dispatch(addUser(user))
        navigate("/")
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
                            onChange={(e) => setUser({ ...user, fname: e.target.value })}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...user, lname: e.target.value })}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
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