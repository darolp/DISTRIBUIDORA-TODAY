import React from 'react';
import SubInfo from './SubInfo/SubInfo';

const ItemHelado = ({data}) => {
    console.log(data.Sub)
    return (
        <div>
            <div>
                <p>{data.nombre}</p>
                <img src={`../src/assets/imgs/${data.img}.jpg`} alt="" />
            </div>
            {data.Sub.map((item,index) =>(<SubInfo item={item} key={index}/> ))}
        </div>
    );
}

export default ItemHelado;
