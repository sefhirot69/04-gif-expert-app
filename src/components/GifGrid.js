import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import GifGridItem from "./GifGridItem";

GifGrid.propTypes = {};

function GifGrid({category}) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs()
    }, []);

    const apiKey = 'e9NDh0olczBjgyILGqOmmHjmnNoolbnY';
    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(({id, images, title}) => {
            return {
                id: id,
                title: title,
                img: images?.downsized_medium.url
            };
        })

        console.log(gifs); //TODO - OJO
        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
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