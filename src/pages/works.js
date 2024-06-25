import React from 'react';
import Container from '../common/Container';
import Work from '../components/Work';

export default function Services() {
  const works = [
    {
      title: 'Tic-Tac-Toe',
      description: 'Un simple juego de tic-tac-toe o ta-te-ti como se conoce en Argentina, creado con vainilla javascript.',
      proyectUrl: 'https://benjasaldao.github.io/tic-tac-toe/',
      codeUrl: 'https://github.com/benjasaldao/tic-tac-toe',
      image: '',
    },
    {
      title: 'Esta misma web',
      description: 'La misma web que ya estuviste viendo. Es una pagina simple construida con next js, utiliza la api del mismo para enviar mails atraves del formulario de contacto.',
      proyectUrl: null,
      codeUrl: 'https://github.com/benjasaldao/benjasaldaopage',
      image: '',
    },
    {
      title: 'Integrity',
      description:
        'Integrity es el sistema de gestion que construimos junto con mi compañero Gonzalo Serpino para el proyecto final de la materia laboratorio de programacion II. El mismo fue creado usando c++ y no posee interfaz grafica.',
      proyectUrl: null,
      codeUrl: 'https://github.com/GonzaloSerpino/Integrity',
      image: '',
    },
    {
      title: 'Catalogo web',
      description: 'Proyecto creado con C# utilizando .NET framework para el curso de C# nivel 3 de maxiprograma.com. En este proyecto utilice bootstrap, C# y SQL. La aplicacion maneja permisos y autenticacion.',
      proyectUrl: 'http://tpfinalnivel3saldanobenjamin.somee.com/',
      codeUrl: 'https://github.com/benjasaldao/tp-final-nivel3-Saldano-Benjamin',
      image: '',
    },
  ];

  return (
    <>
      <Container>
        <h2 className="text-4xl font-bold mb-2">Mis trabajos</h2>
        <p>Algunos proyectos que realice por mi cuenta</p>
        <div className="md:flex flex-wrap gap-4 ">
          {works.map((work) => (
            <Work key={work.title} workData={work} />
          ))}
        </div>
      </Container>
    </>
  );
}
