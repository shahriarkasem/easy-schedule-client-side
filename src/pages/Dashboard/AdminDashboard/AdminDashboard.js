import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Navbar from '../../Home/components/Navbar/Navbar';

const AdminDashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (

        <div >
            <Navbar></Navbar>
            <div class="drawer drawer-mobile container">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-tr-lg">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu  overflow-y-auto w-48  text-base-content bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        {/* <!-- Sidebar content here --> */}
                        <div className='flex items-center'>

                            <div class={"w-10"}>
                                <span><img
                                    className=""
                                    src="https://i.ibb.co/XyrXVjt/easy-Schedule-Icon.png"
                                    alt=""
                                />
                                </span>
                            </div>
                            <div>
                                <h2>{user.displayName}</h2>
                            </div>
                        </div>

                        <h2 className='text-xl font-bold text-center mt-4 pt-4     '>

                            <span className='text-indigo-700 '>Admin</span><span className='text-yellow-500'> Dashboard</span>
                        </h2>
                        <li><Link to="/adminDashboard" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>User Schedule</Link></li>
                        <li><Link to="/adminDashboard/allUsers" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>Make Admin</Link></li>
                        <li><Link to="/adminDashboard/manageUsers" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>Delete Users</Link></li>
                        <li><Link to="/adminDashboard/manageEvents" className='text-white p-4 m-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg'>Manage Events</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;