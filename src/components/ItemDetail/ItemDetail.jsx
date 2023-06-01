import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({productos}) => {
    return (
        <>
            {productos.map(prod =><Item data={prod} key={prod.nombre}/>)}
            
        </>
    );
}

export default ItemDetail;
