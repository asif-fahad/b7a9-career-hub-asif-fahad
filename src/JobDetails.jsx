import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const dynamic = useParams()

    // console.log(dynamic)
    const [details, setDetails] = useState([]);
    const data = useLoaderData()
    // console.log(data)

    useEffect(() => {
        const detailsData = data.find(dt => dt.id === dynamic.id);
        setDetails(detailsData)
        console.log(detailsData)
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-4xl text center m-10'>Job Details</h1>
            </div>
            <div>
                <h1><span>Job Description:</span> {details.description}</h1>
                <h1><span>Job Responsibility:</span> {details.responsibility}</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default JobDetails;