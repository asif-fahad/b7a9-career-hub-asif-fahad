import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import './AppliedJobs.css'
import { useState } from 'react';

const AppliedJobs = () => {
    const cart = useLoaderData()

    const [filter, setFilter] = useState(cart)

    // const handleOnsite = () => {
    //     const filterOnsite = cart.filter(obj => obj.remote_onsite === "Onsite");
    //     setFilter(filterOnsite);
    // }

    // const handleRemote = () => {
    //     const filterRemote = cart.filter(obj => obj.remote_onsite === "Remote");
    //     setFilter(filterRemote);
    // }

    const handleFilterBy = (e) => {
        console.log(e.target.value);
        let filterItem = e.target.value;
        let filterJob;
        if (filterItem === "All") {
            setFilter(cart);
        } else if (filterItem === "Remote") {
            filterJob = cart.filter((job) => job.remote_onsite === filterItem);
            setFilter(filterJob);
        } else if (filterItem === "Onsite") {
            filterJob = cart.filter((job) => job.remote_onsite === filterItem);
            setFilter(filterJob);
        }
    };

    return (
        <div>
            <h1 className='bg-image text-4xl text-center m-0 bg-gray-200 p-10'>Applied Jobs</h1>
            <div className='flex flex-col justify-end items-end mt-5'>
                <div className="text-end mb-5">
                    <select
                        className="border-purple-500 p-2 border rounded-md"
                        onChange={handleFilterBy}
                    >
                        <option selected>Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="All">All</option>
                    </select>
                </div>
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