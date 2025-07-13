import { CheckCheck, CheckSquare2, Home, LucideArchive, LucideCheckSquare2, Menu } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation()
    const navbarItems = [
        {path:'/', label: 'Home', icon: Home},
        {path:'/Todo-list', label: 'Todo List', icon: LucideCheckSquare2},
        {path:'/about', label: 'About', icon: LucideArchive},
  ];
  return (
    <header className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-5">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <Menu className="w-5 h-5 "/>
                </label>
                <ul
                    tabIndex={0}
                    className="menu-md dropdown-content mt-3 z-10 shadow bg-base-100 rounded-box w-52"
                    >
                        {navbarItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <li key={index}>
                                    <Link 
                                    to={item.path}
                                    className={`flex items-center gap-3 ${
                                    location.pathname === item.path 
                                        ? "text-primary-content bg-primary active"
                                        :""
                                    }`}
                                    >
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                    </Link>
                                </li>

                            );
                        })} 
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-lg lg:text-xl font-bold font-wide">
                <CheckSquare2 className="w-5 h-5 lg:h-6 lg:w-6"/>   
                Project App
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
                {navbarItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                    <li key={index}>
                        <Link 
                        to={item.path}
                        className={`flex items-center gap-3 ${
                        location.pathname === item.path 
                         ? "text-primary-content bg-primary active"
                        :""
                            }`}
                        >
                        <Icon className="w-4 h-4" />
                        {item.label}
                        </Link>
                    </li>

                    );
                })} 
            </ul>
            
        </div>
        <div className="navbar-end hidden lg:flex">
            <div className="badge badge-primary badge-lg">
                Project OTI
            </div>
        </div>
    </header>
  )
}

export default Navbar