import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../Redux/Action";


const Userlisting = () => {
    const dispatch = useDispatch();


    // dispatch(FetchUserList())

    const userListData = useSelector((state) => state.userlist)
    // debugger;
    // console.log("userListData User List", userListData);

    const loadingData = useSelector((state) => state.loading)
    // console.log("loadingData ", loadingData);


    const errmessageUser = useSelector((state) => state.errmessage)
    // console.log("errmessageUser ", errmessageUser);
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            dispatch(Removeuser(code));
            // {loadingData}
            toast.success('User removed successfully.')
        }
    }

    useEffect(() => {
        dispatch(FetchUserList())
    }, [])
    return (

        loadingData ? <div><h2>Loading...</h2></div> :
            errmessageUser ? <div><h2>{errmessageUser}</h2></div> :
                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/registration'} className="btn btn-success">Add User [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Code</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Role</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userListData && userListData.map((item, index) => {
                                            const { id, name, email, phone, role } = item
                                            return <tr key={item.index}>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{phone}</td>
                                                <td>{role}</td>
                                                <td>
                                                    <Link to={'/user/edit/' + id} className="btn btn-primary me-3">Edit</Link>
                                                    <button onClick={() => { handledelete(id) }} className="btn btn-danger me-3">Delete</button>
                                                    <Link to={'/read/' + id} className="btn btn-primary me-3">Details</Link>
                                                </td>
                                            </tr>
                                        }

                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
    );
}

// const mapStateToProps = (state) => {
//     console.log(state, "state");
//     return {
//         user: state.user

//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loaduser: () => dispatch(FetchUserList())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);


export default Userlisting