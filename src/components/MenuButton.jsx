import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const MenuButton = () => {
  const { toggleMenu } = useContext(AppContext);

  return (
    <button onClick={() => toggleMenu()} className="sm:hidden text-white bg-gradient-to-tl from-indigo-500 to-celeste inline-block fixed right-3 bottom-3 rounded-md w-10 h-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mt-0.5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

export default MenuButton;
