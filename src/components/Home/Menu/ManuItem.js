import React from 'react';

const ManuItem = ({ title, image }) => {
    return (
        <div className="manu-item text-center">
            <img src={image} alt={title} />
            <h6>{title}</h6>
        </div>
    );
};

export default ManuItem;
