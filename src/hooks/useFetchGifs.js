import {useEffect, useState} from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then(images => {

            setTimeout(() => {
                setState({
                    data: images,
                    loading: false
                })
            }, 1000);
        })
    }, [category]);

    return state;
};

export default useFetchGifs;