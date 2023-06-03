import React from 'react';

const SubInfo = ({item}) => {
    
    return (
        <>            
            <div className='subInfo'> 
                <p>{item.nombre}</p>
                <p className="textoSubInfo">{item.descripcion}</p>
            </div>            
        </>
    );
}

export default SubInfo;
