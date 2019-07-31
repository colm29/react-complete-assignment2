import React from 'react';

const validationComponent = (props) => {
    const validText = props.textLength < 5 ? 'Text too short' : 'Text long enough';
    return (
        <p>{validText}</p>
    );
};

export default validationComponent;