import React from 'react';

const Categories = ({ category }) => {

    const { id, name, logo, available } = category;
    return (
        <div>
            <div className='w-46 p-5 border'>
                <img src={logo} alt="" />
                <h1 className="font-bold">{name}</h1>
                <p>{available}</p>
            </div>
        </div>
    );
};

export default Categories;