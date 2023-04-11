import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center my-8 p-10 bg-gray-200'>
            <div>
                <h1 className='font-extrabold text-4xl'>DesheChakri</h1>
            </div>
            <div >
                <ul className='flex justify-between items-center gap-2 lg:gap-5'>

                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink></li>
                    <li>
                        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>
                    </li>

                </ul>
            </div>
            <div>
                <button className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Apply Now</button>
            </div>
        </div>
    );
};

export default Header;