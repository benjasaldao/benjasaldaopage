import React from 'react';
import Container from '../common/Container';

export default function Services() {
  return (
    <>
      <Container>
        <div>
          <div className="relative">
            <div className="bg-indigo-500 w-64 h-24 z-0"></div>
            <div className="bg-indigo-500 w-24 h-40 z-0"></div>
            <h4 className="font-bold text-5xl w-1/2 ml-8 absolute top-5">Lleva tus ideas a la realidad</h4>
            <p className="my-10 sm:-mt-10 sm:ml-8 tex-gray-500 text-lg">
              Creacion de sitios web, <span className="font-bold">E-Commerce</span>, Landing Pages.
            </p>
          </div>
        </div>
        <div className="relative h-64">
          <div className="bg-celeste w-24 h-40 z-0 absolute right-0"></div>
          <div className="bg-celeste w-64 h-24 z-0 absolute bottom-0 right-0"></div>
          <h4 className="font-bold text-5xl w-1/2 ml-8 absolute top-10 right-8">Llega al siguiente nivel</h4>
          <p className="my-10 sm:-mt-10 sm:ml-8 tex-gray-500 text-lg"></p>
        </div>
      </Container>
    </>
  );
}
