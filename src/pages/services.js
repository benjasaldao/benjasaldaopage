import React from 'react';
import Container from '../common/Container';

export default function Services() {
  return (
    <>
      <Container>
        <div className="relative">
          <div className="bg-indigo-500 w-64 h-24 z-0 bg-gradient-to-tr from-indigo-500 to-celeste"></div>
          <div className="bg-indigo-500 w-24 h-40 z-0"></div>
          <h4 className="font-bold text-5xl w-1/2 ml-8 absolute top-5">Lleva tus ideas a la realidad</h4>
          <p className="my-10 sm:-mt-10 sm:ml-8 tex-gray-500 text-lg">
            Creacion de sitios web, <span className="font-bold">E-Commerce</span>, Landing Pages.
          </p>
        </div>
        <div className="relative h-64">
          <div className="bg-indigo-500 w-24 h-40 z-0 absolute right-0 bg-gradient-to-t from-indigo-500 to-celeste"></div>
          <div className="bg-indigo-500 w-64 h-24 z-0 absolute bottom-0 right-0 "></div>
          <h4 className="font-bold text-5xl w-1/2 ml-8 absolute top-5 right-8">Lleva tu negocio a la web</h4>
          <p className="my-10 sm:-mt-10 sm:ml-8 tex-gray-500 text-lg"></p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold mb-4 text-2xl">Creacion de sitios web</h2>
          <p className="text-gray-500">
            La creacion de sitios web incluye desde una web presentacional basica hasta una tienda vitual completa con un panel de administracion para gestionarla, cargar productos y ver pedidos.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold mb-4 text-2xl">Caracteristicas basicas de mis sitios web</h2>
          <p className="text-gray-500">
            Todos los sitios web que creo son obligatoriamente responsive, esto quiere decir que se adaptan a cualquier tipo de pantalla. Es una caracteristica importante, ya que hoy en dia se estima
            que mas de la mitad del trafico se realiza desde dispositivos moviles.
          </p>
          <p className="text-gray-500">
            Por otro lado todas las web deben pasar pruebas de rendimiento, ya que el tiempo de carga de una web afecta directamente al posicionamiento en los buscadores, como tambien a la experiencia
            que tienen los usuarios en nuestra web.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold mb-4 text-2xl">¿De que me sirve tener un sitio web?</h2>
          <p className="text-gray-500">Puede traer muchos beneficios a tu negocio, tales como:</p>
          <h5 className="font-bold my-4 text-xl">Posiciona tu marca</h5>
          <p className="text-gray-500">Un sitio web va a ayudarte a crear una identidad como marca, presentandote a tus potenciales clientes.</p>
          <h5 className="font-bold my-4 text-xl">Aumenta tus ventas</h5>
          <p className="text-gray-500">Mejora el alcance de tu marca. Tu pagina va a estar disponible desde todo el mundo.</p>
          <h5 className="font-bold my-4 text-xl">Atencion al cliente 24/7</h5>
          <p className="text-gray-500">Disponible los 365 dias del año tu web va a responder dudas, ahorrandote tiempo y dinero.</p>
          <h5 className="font-bold my-4 text-xl">Aplica estrategias de marketing</h5>
          <p className="text-gray-500">Utiliza estrategias modernas de marketing como el inbound marketing, email marketing y muchas mas que serian imposibles de aplicar sin un sitio web!</p>
          <h5 className="font-bold my-4 text-xl">Analisis de datos</h5>
          <p className="text-gray-500">Las paginas web ademas sirven para recolectar informacion de tus clientes y asi poder tomar desiciones en base a esos datos.</p>
        </div>
        <div>
          <h2 className="font-bold my-4 text-2xl">Sitios web al alcance de tu bolsillo</h2>
          <p>Mis servicios son totalmente adaptables a tu presupuesto. Ponte en contacto conmigo y veamos que podemos hacer con tus ideas!</p>
        </div>
      </Container>
    </>
  );
}
