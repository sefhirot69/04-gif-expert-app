import React, {useState} from 'react';
import PropTypes from 'prop-types';

AddCategory.propTypes = {

};

function AddCategory(props) {

    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit hecho');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}

export default AddCategory;