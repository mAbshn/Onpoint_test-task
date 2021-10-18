import React from 'react';

const ListItem = ({number, text}) => {
    return (
        <div>
            <p className="slider3__listNumber">{number}</p>
            <p className="slider3__listText">{text}</p>
        </div>
    );
};

export default ListItem;