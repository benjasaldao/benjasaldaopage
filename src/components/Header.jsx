import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../public/logoBenjaSaldao.png';

const Header = () => {
  return (
    <header className="sm:sticky top-0 bg-white z-50 mb-10">
      <div className="flex items-center justify-between lg:justify-around sm:border-b sm:border-gray-200">
        <div className="w-1/4 sm:w-1/12 lg:w-1/20 cursor-pointer">
          <Link passHref href="/">
            <Image src={logo} alt="logo" layout="responsive" className="" />
          </Link>
        </div>
        <nav className="hidden text-xl sm:flex items-center mr-7">
          <div className="mr-3 text-gray-500 hover:text-black">
            <Link href="/">Inicio</Link>
          </div>
          <div className="mr-3 text-gray-500 hover:text-black">
            <Link href="#about-me">Sobre Mi</Link>
          </div>
          <div className="mr-3 text-gray-500 hover:text-black">
            <Link href="#services">Servicios</Link>
          </div>
          <div className="mr-3 text-white rounded-md bg-indigo-500 px-5 py-1 b cursor-pointer hover:bg-indigo-600">
            <Link href="#contact">Contacto</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
