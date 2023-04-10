import React, { useEffect, useState } from 'react';
import Person from '../public/images/All Images/person.png'
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import Jobs from './Jobs';

const Home = () => {
    const categories = useLoaderData()

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <section>
            <div className='flex flex-col lg:flex-row bg-gray-200'>
                <div>
                    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900'>
                        <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
                            One Step Closer
                            <br />
                            To Your
                            <br />
                            <span className='text-violet-500' >Dream Job</span>
                        </h1>
                        <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <div className='flex flex-wrap justify-center'>
                            <button type='button' className='font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div >
                <div>
                    <img
                        src={Person}
                        alt=''
                        className='object-contain'
                    />
                </div>
            </div >
            <div className='mt-10'>
                <div>
                    <h1 className='font-extrabold text-4xl text-center'>Job Category List</h1>
                    <p className='text-xs text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex justify-center gap-8 mt-10'>
                    {
                        categories.map(category => <Categories
                            key={category.id}
                            category={category}
                        ></Categories>)
                    }
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='font-extrabold text-4xl text-center'>Featured Jobs</h1>
                    <p className='text-xs text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2  justify-items-center gap-8 mt-10'>
                    {
                        jobs.map(job => <Jobs
                            key={job.id}
                            job={job}
                        >
                        </Jobs>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Home;