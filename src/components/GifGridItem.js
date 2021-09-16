import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({id, img, title}) => {

    console.log(id);

    return (
        <>
            <img src={ img } alt={title}/>
            <p>{title}</p>
        </>
    );
};

GifGridItem.propTypes = {
    
};

export default GifGridItem;