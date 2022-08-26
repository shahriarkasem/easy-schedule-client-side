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
                    <h2 className='text-2xl font-bold text-center mt-4 pt-4     '>
                        <span className='text-pink-700 '>Admin</span><span className='text-yellow-500'> Dashboard</span>
                    </h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side p-4">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu  overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/adminDashboard">User Schedule</Link></li>
                        <li><Link to="/adminDashboard/allUsers">Users</Link></li>
                        <li><Link to="/adminDashboard/manageUsers">Manage Users</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;