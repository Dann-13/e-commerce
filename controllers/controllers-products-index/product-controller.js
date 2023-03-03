import { productosServices } from '../../services/productos-service.js';
const slider = $('.slider');
const obtenerInformacion = async () => {
    try {
        const products = await productosServices.lista_productos();
        console.log(products)
        let html = '';
        for (let i = 0; i < products.length; i++) {
            html += '<div class="product"><img src="' + products[i].url + '"><h2>' + products[i].name + '</h2><p>' + products[i].description + '</p><span>$' + products[i].price + '</span></div>';
        }
        slider.html(html);

        // inicializa el carrusel con Slick
        slider.slick({
            slidesToShow: 3, // muestra 4 imágenes a la vez
            autoplay: true, // inicia la animación automáticamente
            autoplaySpeed: 1500, // velocidad de cambio de imagen (2 segundos)
            speed: 1500, // velocidad de animación (1 segundo)
            infinite: true, // permite recorrer el carrusel de forma infinita
            arrows: false, // oculta las flechas de navegación
            dots: false, // oculta los puntos de navegación
            responsive: [
                {
                    breakpoint: 768, // cambia la configuración cuando la pantalla es menor a 768px
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480, // cambia la configuración cuando la pantalla es menor a 480px
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    } catch (err) {
        console.log(err);

    }
}
obtenerInformacion();
