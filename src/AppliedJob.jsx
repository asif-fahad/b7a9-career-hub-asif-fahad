import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ c }) => {
    const { id, logo, job_title, company_name, remote_onsite, fulltime_parttime, location, salary } = c;
    // console.log(c)

    return (
        <div>

            <div className='flex border w-9/12 mx-auto flex-'>
                <img src={logo} alt="" className='object-contain w-36' />
                <div className='review-details'>
                    <h1 className="font-bold">{job_title}</h1>
                    <h1 className="font-bold">{company_name}</h1>
                    <div className='flex gap-4'>
                        <span className="border">{remote_onsite}</span>
                        <span className="border">{fulltime_parttime}</span>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span>{location}</span>
                        </div>

                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{salary}</span>
                        </div>
                    </div>
                </div>
                <Link to={`/jobDetails/${id}`} >
                    <button className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;