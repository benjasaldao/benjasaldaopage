import React from 'react';
import Container from '../common/Container';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container>
      <footer className="border-t border-gray-200 pt-8 mt-10">
        <div className="md:flex items-start justify-between">
          <nav className="text-gray-500 my-6">
            <div className="p-1 hover:text-black w-min">
              <Link href="/">Inicio</Link>
            </div>
            <div className="p-1 w-max hover:text-black">
              <Link href="/about-me">Sobre Mi</Link>
            </div>
            <div className="p-1 w-min hover:text-black">
              <Link href="/services">Servicios</Link>
            </div>
            <button className="p-1 w-min hover:text-black">
              <Link href="/contact">Contacto</Link>
            </button>
          </nav>
          <div className="mt-6 mr-8 ">
            <h4>Mis redes sociales:</h4>
            <div className="flex">
              <a href="https://github.com/benjasaldao" className="m-2">
                <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/benjasaldano/" className="m-2">
                <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">2022 © Todos los derechos reservados</div>
      </footer>
    </Container>
  );
};

export default Footer;
