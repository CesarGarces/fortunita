import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    constructor(){
        super();

    }

    render() {
        return (

            <footer className="footer">
                <div className="container">
                    <div className="float-right">
                         {/* <BoxesForm addBox = {this.addBox}/> */}
                    </div>
                    <small>Aquí puede abrir cajas misteriosas para obtener buenas ofertas de artículos reales. ¡Abra cajas y gane aparatos electrónicos, aparatos de juegos, artículos para geeks, equipos deportivos, juguetes, videojuegos y otros productos modernos con un descuento mucho más barato que en el comercio minorista! ¿Qué es una caja misteriosa? A veces se llama «caja de botín» o «caja de sorpresa». Es un juego de azar cuando abres un caso y obtienes un objeto aleatorio de él. En Fortunita, siempre puedes ver lo que hay dentro de nuestras cajas misteriosas antes de abrirlas y estar seguro de que entregaremos cualquier artículo a tiempo en cualquier lugar del mundo. Para proporcionar a nuestros clientes una experiencia emocionante, actualizamos periódicamente nuestra lista de productos y cajas, utilizamos sistemas de pago estables y aceptamos tarjetas de crédito. También puede comprar nuestras tarjetas de regalo usando PayPal en Kinguin y otras plataformas para recargar su saldo en cualquier momento. ¡Simplemente haga clic en los casos resaltados y obtenga artículos presentados ahora mismo! Pero antes de ingresar a nuestras filas, debe registrarse, agregar fondos a su cuenta y aceptar nuestros términos y condiciones. Tenga en cuenta que solo las personas mayores de 18 años pueden utilizar nuestro servicio.</small>
                </div>
            </footer>
        )
    }
}
export default Footer;
