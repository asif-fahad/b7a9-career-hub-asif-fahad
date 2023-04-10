import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>DesheChakri</h1>
            </div>
            <div >
                <ul className='flex justify-between items-center'>
                    <li className='gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;