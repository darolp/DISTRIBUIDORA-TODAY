import React from 'react';

const Contacto = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar las acciones necesarias con los datos del formulario
        console.log('Datos del formulario:', {
          nombre,
          apellido,
          telefono,
          email,
          comentarios
        });
      };

    return (
        <div className='contactoContainer'>
            <div className='contactoContainerSub'>                
                <div className='infoTopContacto'>
                    <p className='tituloInfoTopContacto'>Contáctenos</p>
                    <div className='redesInfoTopContacto'>
                        <p><i className="fa-brands fa-whatsapp whatsapp"></i> 2613340137</p>
                        <p><i className="fa-brands fa-instagram instagram"></i> todayhechocomoencasa</p>                     
                        <p><i className="fa-brands fa-facebook-f facebook"></i> Today .Hecho como en Casa</p>
                        <p><i className="fa-solid fa-location-dot location"></i> Mendoza - Argentina</p>
                    </div>
                </div>
                <div className='contactoFormContainer'>
                    <p>Por Favor Complete el formulario para dejar su consulta o comentario</p>
                    <form className='formulario' onSubmit={handleSubmit}>
                        <div className='contenedorDatos'>   
                            <div className='contenedorDatos1'>
                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input type="text" id="nombre"/>
                            </div>

                            <div className='contenedorDatos2'>
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" />

                            </div>

                            <div className='contenedorDatos3'>
                                <label htmlFor="email">E-mail</label>              
                                <input type="email" id="email" />
                            </div>             

                        </div>
                        <div className='contenedorDatosComent'>
                            <label htmlFor="comentarios">Comentarios</label>
                            <textarea id="comentarios"></textarea>
                        </div>                  

                        <input className='botonSubmit' type="submit" value="Enviar" />
                    </form>     
                </div>
            </div>
        </div>
    );
}

export default Contacto;
