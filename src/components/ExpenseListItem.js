import React from 'react';
import {Link} from 'react-router-dom';


const ItemList=({id,description, amount, createdAt})=>{
    return(
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            
            <Link to={`/edit/${id}`}>Edit</Link>
 
        </div>
    )
}


export default ItemList;