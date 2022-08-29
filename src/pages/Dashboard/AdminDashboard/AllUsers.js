import { useQuery } from '@tanstack/react-query'
// import Loading from '../../Shared/Loading'
// import AdminRole from './AdminRole';
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import Loading from "../../Shared/Loading";
import AllUsersRows from './AllUsersRows';

const AllUsers = () => {
    // const [adminRole, setadminRole] = useState([]);

    const [user] = useAuthState(auth);
    const { email } = user;
    // console.log(user)
    const navigate = useNavigate();

    // const { role } = adminRole;
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/users`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             console.log('res', res);
    //             if (isLoading) {
    //                 return <Loading></Loading>
    //             }
    //             return res.json()
    //         })
    //         .then(data => {

    //             setadminRole(data);
    //         });
    // }, [user, isLoading])


    return (
        <div>
            <h2 className='text-center p-4 text-lg font-semibold'>Total Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr className='bg-orange-300 text-center'>
                            <th className='bg-orange-300'></th>
                            <th className='bg-orange-300'>User Name</th>
                            <th className='bg-orange-300'>User Email</th>
                            <th className='bg-orange-300'></th>
                            <th className='bg-orange-300'></th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            users.map((user, index) => <AllUsersRows
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AllUsersRows>)
                        }
                    </tbody>
                    <tfoot>
                        <tr className="bg-orange-300 text-center">
                            <th className="bg-orange-300"></th>
                            <th className="bg-orange-300">User Name</th>
                            <th className="bg-orange-300">User Email</th>
                            <th className="bg-orange-300"></th>
                            <th className="bg-orange-300"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
