import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center my-8 p-10 bg-gray-200'>
            <div>
                <h1 className='font-extrabold text-4xl'>DesheChakri</h1>
            </div>
            <div >
                <ul className='flex justify-between items-center'>
                    <li className=''>
                        <Link to='/' className='me-2'>Home</Link>
                        <Link to='/statistics' className='me-2'>Statistics</Link>
                        <Link to='/appliedJobs' className='me-2'>Applied Jobs</Link>
                        <Link to='/blog' className='me-2'>Blog</Link>
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