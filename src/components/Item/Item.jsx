import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({data}) => {  
       
    return (
        
              <div className="card" >
                    <div className='card-img'>
                        <img src={`../src/assets/imgs/${data.img}.jpg`} className="" alt="..." />
                    </div>                    
                    <div className="cardInfo">
                        <h5 className="card-title">{data.nombre}</h5>   
                        <p>{data.texto}</p>                 
                        <Link  to={"ws"}><button className='boton'><i className="fa-brands fa-whatsapp whatsapp"></i> Hacé tu pedido</button></Link>
                    </div>
               </div>   
        
    );
}

export default Item;
