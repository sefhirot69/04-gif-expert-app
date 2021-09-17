import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({id, img, title}) => {

    return (
        <div key={id} className='card animate__animated animate__fadeIn animate__delay-1s'>
            <img src={ img } alt={title}/>
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    id : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};

export default GifGridItem;