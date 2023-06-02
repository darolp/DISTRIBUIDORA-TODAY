import React from 'react';

const SubInfo = ({item}) => {
    
    return (
        <>            
            <div className='subInfo'> 
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>            
        </>
    );
}

export default SubInfo;
