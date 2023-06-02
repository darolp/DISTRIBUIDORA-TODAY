import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const Productos = () => {


    const [estado, setestado] = useState('Pastas');
    const [productosVisual, setproductosVisual] = useState([]);



    useEffect(() => {
        fetch(`../../json/${estado}.json`)
            .then(response => response.json())
            .then(data => {                
                const productosAux = <ItemDetail productos={data} estadoAux={estado}/>
                setproductosVisual(productosAux)
            })
    }, [estado])
    let classNameProductosView = 'productosView';
    if (estado === 'Helados') {
        classNameProductosView = 'productosViewHelados';
      }
    const handleCategoryClick = (category) => {
        setestado(category);
    };
    return (
        <>
            <div className="ProductosContainer">
                <div className='navProductos'>
                    <ul>
                        <li className={estado === 'Pastas' ? 'active' : ""} onClick={() => handleCategoryClick('Pastas')}>Pastas</li>
                        <li className={estado === 'Panificados' ? 'active' : ""} onClick={() => handleCategoryClick('Panificados')}>Panificados</li>
                        <li className={estado === 'EmpanadasyTartas' ? 'active' : ""} onClick={() => handleCategoryClick('EmpanadasyTartas')}>Empanadas y Tartas</li>
                        <li className={estado === 'Helados' ? 'active' : ""} onClick={() => handleCategoryClick('Helados')}>Helados</li>
                        <li className={estado === 'Insumos' ? 'active' : ""} onClick={() => handleCategoryClick('Insumos')}>Insumos</li>
                    </ul>
                </div>
                <div className={classNameProductosView}>
                    {productosVisual}
                </div>
            </div>
        </>
    );
}






export default Productos;
