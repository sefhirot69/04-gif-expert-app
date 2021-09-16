import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({id, img, title}) => {

    console.log(id);

    return (
        <div className='card'>
            <img src={ img } alt={title}/>
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    
};

export default GifGridItem;