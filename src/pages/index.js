import React from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Container from '../common/Container';
import desarrollador from './../../public/desarrollador.png';
import development from './../../public/development.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Header />
        <section id="#about-me" className="mt-10 md:flex items-center justify-between">
          <div className="flex flex-col items-center md:max-w-4/10">
            <h4 className="text-4xl font-bold mb-8">Sobre Mi</h4>
            <p className="text-gray-500 p-4">Hola de nuevo! Mi nombre es Benjamin Saldaño y soy desarrollador web. Tengo 22 años y soy de Buenos Aires, Argentina.</p>
            <Link passHref href="/about-me">
              <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4">Leer mas</button>
            </Link>
          </div>
          <div className="flex items-center justify-center self-end">
            <Image className="" alt="desarrollador" src={desarrollador} />
          </div>
        </section>
        <section className="mt-10 md:flex items-center justify-between">
          <div className="flex flex-col items-center md:max-w-4/10">
            <h4 className="text-4xl font-bold mb-8">Mis servicios</h4>
            <p className="text-gray-500 p-4">Creacion de Sitios web, tiendas virtuales, landing pages y todo lo necesario para llevar tu marca a la web!</p>
            <Link passHref href="/services">
              <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4">Leer mas</button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image alt="desarrollador" src={development} />
          </div>
        </section>
      </Container>
    </>
  );
}
