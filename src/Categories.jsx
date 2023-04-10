import React from 'react';

const Categories = ({ category }) => {
    console.log(category)
    const { id, name, logo, available } = category;
    return (
        <div>
            <div className='border'>
                <img src={logo} alt="" />
                <h1>{name}</h1>
                <p>{available}</p>
            </div>
        </div>
    );
};

export default Categories;