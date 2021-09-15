import React, {useState} from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] =
        useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Chicho']);
    //     // setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return <>
        <h2>GifExpertApp</h2>
        <AddCategory/>
        <hr/>
        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
};

export default GifExpertApp;