import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const Productos = () => {

    
    const [estado , setestado] = useState('Pastas');
    const [productosVisual , setproductosVisual] = useState ([]);

   

    useEffect(()=>{
        fetch(`../../json/${estado}.json`)
        .then(response =>response.json())
        .then(data =>{            
            const productosAux =  <ItemDetail productos={data}/>
            setproductosVisual(productosAux)
        })
    },[estado])

    const handleCategoryClick = (category) => {
        setestado(category);
      };
    return (
        <>
        <div className="ProductosContainer">
            <div className='navProductos'>
                <ul>
                    <li onClick={() => handleCategoryClick('Pastas')}>Pastas</li>
                    <li onClick={() => handleCategoryClick('Panificados')}>Panificados</li>
                    <li onClick={() => handleCategoryClick('EmpanadasyTartas')}>Empanadas y Tartas</li>
                    <li onClick={() => handleCategoryClick('Helados')}>Helados</li>
                    <li onClick={() => handleCategoryClick('Insumos')}>Insumos</li>
                </ul>
            </div>
            <div className='productosView'>
                {productosVisual}
            </div>
        </div>
        </>
    );     
    }
 
    

    


export default Productos;
