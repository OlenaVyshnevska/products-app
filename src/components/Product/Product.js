import React from 'react';

const Prod = (props) => {
    return(
        <div className="item">
            Name: {props.name}
            <br />
            Price: ${props.price}
            <br />
            Description: {props.desc}
        </div>
    );
}

export default Prod;