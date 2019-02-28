import React from 'react';

const Row = (props) => {
    return (
        
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default Row;