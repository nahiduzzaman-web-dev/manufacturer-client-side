import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogInSharp } from 'react-icons/io5'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        <li><Link to='/reviewCollection'>Reviews</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user && <li><Link className='text-secondary bg-white font-bold mr-3' to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-outline btn-primary  text-secondary">Sign out</button> : <span className='text-orange-600 text-xl'><Link to='/login' className='flex justify-center'>Login  <IoLogInSharp /></Link></span>}</li>

    </>
    return (
        <div className="navbar bg-accent text-white fixed z-[100]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Tools Provita Ltd.
                    <img src='' alt="" width='50px' className='ml-5' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex bg-accent text-white">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dasboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;