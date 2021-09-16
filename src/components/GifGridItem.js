import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = (img) => {

    console.log(img);

    return (
        <>
            { img.title }
        </>
    );
};

GifGridItem.propTypes = {
    
};

export default GifGridItem;