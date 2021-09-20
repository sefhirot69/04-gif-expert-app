import React from 'react';
import PropTypes from 'prop-types';
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
};

function GifGrid({category}) {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p className='animate__animated animate__flash'>{loading && 'Cargando ...'}</p>
            <div className="card-grid">
                {
                    images.map((img) =>
                        (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    )
                }

            </div>
        </>

    );
}

export default GifGrid;