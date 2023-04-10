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
        </div>
    );
};

export default Header;