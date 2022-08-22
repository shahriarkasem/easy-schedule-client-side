import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import useAdmin from '../../../hooks/useAdmin';

const AdminDashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


        <div>
            <Button variant="link" onClick={handleShow}>
                <ul>
                    <li><AiOutlineMenuFold /></li>
                </ul>

            </Button>
            <Outlet></Outlet>
            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-center'>DashBoard</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>

                    <ul >
                        {!admin && <li><Link to="/dashboard" className='text-decoration-none text-center text-dark'>My Order</Link></li>}
                        {!admin && <li><Link to="/dashboard/review" className='text-decoration-none text-dark'>Add Reviews</Link></li>}
                        <li><Link to="/dashboard/myProfile" className='text-decoration-none text-dark'> My Profile</Link></li>
                        {admin && <li><Link to="/dashboard/users" className='text-decoration-none text-dark'>Manage All Users</Link></li>}
                        {admin && <li><Link to="/dashboard/allOrders" className='text-decoration-none text-dark'> All Orders</Link></li>}
                        {admin && <li><Link to="/dashboard/addProduct" className='text-decoration-none text-dark'> Add Product</Link></li>}
                        {admin && <li><Link to="/dashboard/makeAdmin" className='text-decoration-none text-dark'> Make Admin</Link></li>}
                        {admin && <li><Link to="/dashboard/manageProducts" className='text-decoration-none text-dark'> Manage Products</Link></li>}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default AdminDashboard;