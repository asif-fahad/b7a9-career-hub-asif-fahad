import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const cart = useLoaderData()



    const handleOnsite = event => {

    }

    const handleRemote = event => {

    }

    return (
        <div>
            <h1 className='text-4xl text-center m-10 bg-gray-200 p-10'>Applied Jobs</h1>
            <div className='flex flex-col justify-end items-end'>
                <button onClick={handleOnsite} className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Onsite</button>
                <button onClick={handleRemote} className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Remote</button>
            </div>

            {
                cart.map(c => <AppliedJob
                    key={c.id}
                    c={c}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;