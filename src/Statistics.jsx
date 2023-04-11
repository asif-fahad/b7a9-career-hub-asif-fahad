import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const marksArray = [
        {
            id: 1,
            name: "Assignment 1",
            marks: 60
        },
        {
            id: 2,
            name: "Assignment 2",
            marks: 59
        },
        {
            id: 3,
            name: "Assignment 3",
            marks: 58
        },
        {
            id: 4,
            name: "Assignment 4",
            marks: 60
        },
        {
            id: 5,
            name: "Assignment 5",
            marks: 58
        },
        {
            id: 6,
            name: "Assignment 6",
            marks: 58
        },
        {
            id: 7,
            name: "Assignment 7",
            marks: 60
        },
        {
            id: 8,
            name: "Assignment 8",
            marks: 60
        }

    ]

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center m-10 bg-gray-200 p-10'>Statistics</h1>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    // width={370}
                    // height={500}
                    data={marksArray}
                >
                    <Area dataKey="marks"></Area>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;