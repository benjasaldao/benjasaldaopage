import React from 'react';
import Container from '../common/Container';

export default function Services() {
  return (
    <>
      <Container>
        <h2 className="text-4xl font-bold mb-2">Mis trabajos</h2>
        <p>Algunos proyectos que realice por mi cuenta</p>
        <div className="mt-8 border border-black rounded-md p-4">
          <h4 className="text-xl font-bold">Tic-Tac-Toe</h4>
          <p>Un simple juego de tic-tac-toe o ta-te-ti como se conoce en Argentina.</p>
          <a href="https://benjasaldao.github.io/tic-tac-toe/" target="_blank" rel="noreferrer">
            <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white border-2 border-primary bg-indigo-500 m-4"> Ver proyecto</button>
          </a>
          <a href="https://github.com/benjasaldao/tic-tac-toe" target="_blank" rel="noreferrer">
            <button className="text-center w-32 hover:bg-indigo-200 py-1 rounded-md border-2 border-primary m-4"> Ver codigo</button>
          </a>
        </div>
      </Container>
    </>
  );
}
