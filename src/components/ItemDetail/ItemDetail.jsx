import React from 'react';
import Item from '../Item/Item';
import ItemHelado from '../ItemHelado/ItemHelado';

const ItemDetail = ({productos,estadoAux}) => {
    return (
        <>
            {estadoAux==='Helados'?productos.map(prod =><ItemHelado data={prod} key={prod.nombre}/>):productos.map(prod =><Item data={prod} key={prod.nombre}/>)}
            
        </>
    );
}

export default ItemDetail;
