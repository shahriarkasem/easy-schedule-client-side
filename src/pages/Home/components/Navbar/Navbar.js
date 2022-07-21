import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='header-link'>About</a></li>
                            <li><a className='header-link'>Pricing</a></li>
                            <li><a className='header-link'>Services</a></li>
                            <li><a className='header-link'>Contact</a></li>
                        </ul>
                    </div>
                    <div class="w-10 rounded-full">
                        <img src="https://i.ibb.co/QnJPG33/easy-Schedule-Icon.jpg" />
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Easy Schedule</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a className='header-link'>About</a></li>
                        <li><a className='header-link'>Pricing</a></li>
                        <li><a className='header-link'>Services</a></li>
                        <li><a className='header-link'>Contact</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="button-orange-border-h40">Login</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;