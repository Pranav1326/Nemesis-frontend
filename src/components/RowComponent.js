import React from 'react';

const RowComponent = (porps) => {
    return (
        <> 
            <td > {porps.username} </td> 
            <td > {porps.email} </td> 
            <td > {porps.cellnumber} </td> 
            <td > {porps.address} </td> 
            <td > <button className="delete-btn"> Delete </button> </td> 
        </>
    )
}

export default RowComponent;
