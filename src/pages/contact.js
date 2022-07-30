import React from 'react';
import Container from '../common/Container';
import Image from 'next/image';
import hablando from './../../public/hablando.png';

const contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit} className="border border-black rounded-md p-4 my-10 md:flex justify-between">
          <div className="flex flex-col mx-6">
            <h4 className="text-4xl font-bold mb-8 -mt-10 bg-white">Ponte en contacto </h4>
            <label htmlFor="name" className="text-gray-500">
              Nombre: <br />
              <input name="name" type="text" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            </label>
            <label htmlFor="email" className="text-gray-500">
              Email: <br />
              <input name="email" type="email" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            </label>
            <label htmlFor="message" className="text-gray-500">
              Tu mensaje: <br />
              <textarea name="message" type="text" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            </label>
            <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 mt-4">Enviar</button>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <Image className="" alt="desarrollador" src={hablando} />
          </div>
        </form>
      </Container>
    </>
  );
};

export default contact;
