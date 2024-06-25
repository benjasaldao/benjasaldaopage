import React from 'react';
import Image from 'next/image';

const Work = ({ workData }) => {
  return (
    <div className="flex flex-col justify-between mt-8 border border-black rounded-md p-4 md:w-1/4">
      <div>
        {workData.image != '' && <Image alt="" src={workData.image} />}
        <h4 className="text-xl font-bold">{workData.title}</h4>
        <p>{workData.description}</p>
      </div>
      <div>
        {workData.proyectUrl && (
          <a href={workData.proyectUrl} target="_blank" rel="noreferrer">
            <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white border-2 border-primary bg-indigo-500 m-4"> Ver proyecto</button>
          </a>
        )}
        <a href={workData.codeUrl} target="_blank" rel="noreferrer">
          <button className="text-center w-32 hover:bg-indigo-200 py-1 rounded-md border-2 border-primary m-4"> Ver codigo</button>
        </a>
      </div>
    </div>
  );
};

export default Work;
