import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import './AppliedJobs.css'
import { useState } from 'react';

const AppliedJobs = () => {
    const cart = useLoaderData()

    const [filter, setFilter] = useState(cart)

    const handleOnsite = () => {
        const filterOnsite = cart.filter(obj => obj.remote_onsite === "Onsite");
        setFilter(filterOnsite);
    }

    const handleRemote = () => {
        const filterRemote = cart.filter(obj => obj.remote_onsite === "Remote");
        setFilter(filterRemote);
    }

    return (
        <div>
            <h1 className='bg-image text-4xl text-center m-10 bg-gray-200 p-10'>Applied Jobs</h1>
            <div className='flex flex-col justify-end items-end'>
                <button onClick={handleOnsite} className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Onsite</button>
                <button onClick={handleRemote} className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Remote</button>
            </div>

            {
                filter.map(c => <AppliedJob
                    key={c.id}
                    c={c}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;