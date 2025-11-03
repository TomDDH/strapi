import React from 'react';

const Button = () => {
    return (
        <button
            style={{
                background: 'red'
            }}
            onClick={() => {
                console.log("clicked ")
            }}
        >
            Preview
        </button>
    );
};

export default Button;
