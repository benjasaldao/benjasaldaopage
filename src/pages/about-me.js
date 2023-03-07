import Image from 'next/image';
import React from 'react';
import Container from '../common/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faInstagram, faJs, faNode, faReact, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import diploma from '../../public/diploma-escuela-javascript.png';

const AboutMe = () => {
  return (
    <Container>
      <h2 className="text-4xl font-bold mb-8">Sobre mi</h2>
      <div className="text-gray-500">
        <p>
          Hola de nuevo! Me llamo Benjamin Saldaño, soy de Buenos Aires, Argentina, tengo 22 años y soy desarrollador web. Empece haciendo un curso en el 2019 por mera curiosidad, ya que en ese
          momento estaba estudiando economia en la universidad de Buenos Aires. Luego, por la pandemia, deje la facultad pero segui con el curso.{' '}
        </p>
        <p>
          Mediante este adquiri conocimientos en javascript, una tecnologia creada en un principio para darle interactividad a los sitios web pero que con el tiempo fue modificandose para poder ser
          utilizada en muchos ambitos, incluso hasta en la robotica. Pero yo no se nada de robotica, en mi caso la utilizo para añadirle funcionalidades a mis sitios y luego la llevo al lado del
          servidor para utilizarla de una infinidad de maneras. Actualmente trabajo en una distribuidora de telas (donde no hago nada relacionado a la programacion), y en mi tiempo libre me dedico a
          seguir aprendiendo a programar, ya que el constante cambio en el sector tecnologico hace que nunca termines de aprender.
        </p>
      </div>
      <h4 className="text-2xl font-bold my-8">Donde aprendiste?</h4>
      <div className="text-gray-500 md:flex">
        <p>
          Los cursos de desarrollo web los hice en una escuela virtual llamada{' '}
          <a target="_blank" rel="noreferrer" href="https://platzi.com/">
            <span className="underline hover:text-black cursor-pointer">Platzi.com</span>
          </a>{' '}
          Luego realice un curso de React JS en{' '}
          <a target="_blank" rel="noreferrer" href="https://www.coderhouse.com/">
            <span className="underline hover:text-black cursor-pointer"> Coderhouse.</span>
          </a>{' '}
          Actualmente me encuentro cursando la tecnicatura en programacion de la{' '}
          <a target="_blank" rel="noreferrer" href="https://www.frgp.utn.edu.ar/">
            <span className="underline hover:text-black cursor-pointer"> UTN.</span>
          </a>{' '}
        </p>
        <div className="flex items-center justify-center mt-4 md:mt-0 md:px-24">
          <Image alt="desarrollador" src={diploma} />
        </div>{' '}
      </div>
      <h4 className="text-2xl font-bold my-8">Las tecnologias que utilizo:</h4>
      <p>
        Tengo conocimientos en desarrollo frontend utilizando React JS (Esta pagina esta creada con React), como tambien tengo conocimientos en backend utilizando Node JS sobre todo con Express para
        poder desarrollar APIs REST. Ademas se utilizar Next JS para implementar server side render y poder transformar dicha web en una progresive web app.
      </p>
      <div className="flex mt-8">
        <FontAwesomeIcon icon={faNode} className="h-20 w-20 mr-4" />
        <FontAwesomeIcon icon={faHtml5} className="h-20 w-20 mr-4" />
        <FontAwesomeIcon icon={faCss3} className="h-20 w-20 mr-4" />
        <FontAwesomeIcon icon={faReact} className="h-20 w-20 mr-4" />
        <FontAwesomeIcon icon={faJs} className="h-20 w-20 mr-4" />
      </div>
      <div className="mt-6 mr-8 text-black">
        <h4 className="text-2xl font-bold my-8">Mis redes sociales:</h4>
        <p>Te dejo links a mis redes sociales por si queres conocerme mas de cerca!</p>
        <div className="flex">
          <a href="https://github.com/benjasaldao" target="_blank" rel="noreferrer" className="m-2">
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/benjasaldano/" target="_blank" rel="noreferrer" className="m-2">
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/benjamin-salda%C3%B1o/" target="_blank" rel="noreferrer" className="m-2">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
