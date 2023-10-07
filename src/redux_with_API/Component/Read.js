import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserObj } from '../Redux/Action';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const details = useSelector((state) => state.userobj)
    console.log("details", details);
    const { id, name, email, phone, role } = details
    const { code } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchUserObj(code))
    }, [])
    return (
        <div>
            <div className="card">
                <div className="card-header" style={{ textAlign: 'left' }}>
                    <h2>Details User</h2>
                </div>

                <div className="card-body" style={{ textAlign: 'left' }}>
                    <p> Id : {id}</p>
                    <p> Name : {name}</p>
                    <p> Email : {email}</p>

                    <Link className="btn btn-danger" to={'/'}>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Read