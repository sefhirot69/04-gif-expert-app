import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({id, img, title}) => {

    return (
        <div className='card animate__animated animate__fadeIn animate__delay-1s'>
            <img src={ img } alt={title}/>
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    
};

export default GifGridItem;