import React from 'react';
import { useState } from 'react';

const PreguntasFrecuentes = () => {

    const [busqueda, setBusqueda] = useState('');
    function handleBuscar() {
        const seccionesPreguntas = document.querySelectorAll('.seccionesPreguntas');

        for (let i = 0; i < seccionesPreguntas.length; i++) {
            const div = seccionesPreguntas[i];
            const textoDiv = div.querySelector('p').textContent.toLowerCase();

            if (busqueda === '' || textoDiv.includes(busqueda.toLowerCase())) {
                div.style.display = 'flex';
            } else {
                div.style.display = 'none';
            }
        }
    }

    function toggleDisplay(dato) {
        let respuesta = document.querySelector(`.${dato}`);
        let seccion = document.querySelector(`.${dato}Sec`);
        let icon = document.querySelector(`.${dato}i`);
        let estilo = window.getComputedStyle(respuesta);
        let display = estilo.getPropertyValue("display");
        respuesta.style.display = (display === "none") ? "block" : "none";
        if (respuesta.style.display == "block") {
            seccion.classList.add('active2');
            seccion.classList.remove('lineaAbajo')
            icon.style.color = "white";
        }
        else {
            seccion.classList.remove('active2');
            icon.style.color = "#F37748";
            seccion.classList.add('lineaAbajo')
        }
        ;
    }
    return (
        <>
            <section className='FAQ'>
                <div className='preguntasContainer'>
                    <p className='tituPreguntas'>¿Con qué podemos ayudarte?</p>
                    <div className='containerInputBuscar'>
                        <input className='inputBuscar' type="text" value={busqueda} placeholder="Buscá en preguntas frecuentes" onChange={(e) => setBusqueda(e.target.value)} />
                        <button className='botonBuscar' onClick={handleBuscar}>Buscar</button>
                    </div>
                    <div className='infoPreguntas'>
                        <div>
                            <div className='seccionesPreguntas lineaAbajo ComprasSec' onClick={() => toggleDisplay('Compras')}>
                                <p>Compras</p>
                                <i className="fa-solid fa-chevron-right Comprasi"></i>
                            </div>
                            <p className='Compras'>Para realizar tu compra comunicate con nosotros al whatsapp 0261 334-0137. Los pedidos se toman con 24 hs de anticipación.</p>
                        </div>
                        <div>
                            <div className='seccionesPreguntas lineaAbajo DevolucionesSec' onClick={() => toggleDisplay('Devoluciones')}>
                                <p>Devoluciones o cambios</p>
                                <i className="fa-solid fa-chevron-right Devolucionesi"></i>
                            </div>
                            <p className='Devoluciones'>Hacemos devoluciones siempre y cuando el producto tenga un defecto. Si tuviste algún inconveniente, comunicate con nosotros al whatsapp 0261 334-0137 para poder brindarte ayuda.</p>
                        </div>
                        <div>
                            <div className='seccionesPreguntas lineaAbajo EnviosSec' onClick={() => toggleDisplay('Envios')}>
                                <p>Envios</p>
                                <i className="fa-solid fa-chevron-right Enviosi"></i>
                            </div>
                            <p className='Envios'>El costo de envío depende de la zona de entrega. Si tenés alguna duda comunicate al whatsapp 0261 334-0137.</p>
                        </div>
                        <div>
                            <div className='seccionesPreguntas PagosSec' onClick={() => toggleDisplay('Pagos')}>
                                <p>Pagos</p>
                                <i className="fa-solid fa-chevron-right Pagosi"></i>
                            </div>
                            <p className='Pagos'>Como forma de pago podes optar por efectivo o transferencia bancaria.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PreguntasFrecuentes;
