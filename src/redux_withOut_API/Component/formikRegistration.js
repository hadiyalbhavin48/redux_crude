
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/Action/AllAction'
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik'
import * as Yup from 'yup'
const initialValues = {
    id: uuidv4(),
    fname: "",
    lname: "",
    username: "",
    password: ""
};
const isValidSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Please Enter First Name "),
    lname: Yup.string().required("Please Enter Last Name"),
    username: Yup.string().required("Please Enter username Name"),
    password: Yup.string().required("Please Enter password Name"),
})
const Registration = () => {
    const { handleChange, handleBlur, handleSubmit, touched, values, errors } = useFormik({
        initialValues,
        validationSchema: isValidSchema,
        onSubmit: (values) => {
            dispatch(addUser(values))
            console.log(values, "values");
            navigate("/")
        }
    })
    // console.log("Formik", Formik);
    console.log("errors", errors);

    const dispatch = useDispatch()
    const navigate = useNavigate()


    // Validation

    const isValid = () => {

    }
    // const handelSubmit = (e) => {
    //     e.preventDefault();

    //     // dispatch(addUser(user))
    //     navigate("/")
    // }
    return (
        <div>
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            id="firstname"
                            value={values.fname}
                            // onChange={(e) => setUser({ ...user, fname: e.target.value })}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className='' style={{ color: "red" }}>{errors.fname}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            id="lastname"
                            value={values.lname}
                            onChange={handleChange}
                            // onChange={(e) => setUser({ ...user, lname: e.target.value })}
                            className="form-control"
                        />
                        <p className='' style={{ color: "red" }}>{errors.lname}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            // onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className="form-control"
                        />
                        <p className='' style={{ color: "red" }}>{errors.username}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="Password"
                            value={values.password}
                            onChange={handleChange}
                            // onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="form-control"
                        />
                        <p className='' style={{ color: "red" }}>{errors.password}</p>
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