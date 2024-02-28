// components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import AstroImage from './AstroImage'; // Importe o componente AstroImage

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-4">
      <header className="bg-slate-950 text-white py-4 mx-8 px-8 rounded-xl">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center"> {/* Adicione o componente AstroImage aqui */}
            <AstroImage /> {/* Componente AstroImage */}
            <Link href="/">
              <div className="text-xl font-bold ml-2">Astroblog</div>
            </Link>
          </div>
          <nav className="md:flex hidden">
            <ul className="flex space-x-4">
              <li>
                <Link href="/signos">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">Signos</div>
                </Link>
              </li>
              <li>
                <Link href="/casas">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">Casas</div>
                </Link>
              </li>
              <li>
                <Link href="/planetas">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">Planetas</div>
                </Link>
              </li>
              <li>
                <Link href="/elementos">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">Elementos</div>
                </Link>
              </li>
              <li>
                <Link href="/aspectos">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">Aspectos</div>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <div className="text-gray-400 hover:text-gray-100 transition-colors">FAQ</div>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-400 hover:text-gray-100 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <nav className={`md:hidden mt-4 transition-all duration-700 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/signos">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">Signos</div>
              </Link>
            </li>
            <li>
              <Link href="/casas">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">Casas</div>
              </Link>
            </li>
            <li>
              <Link href="/planetas">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">Planetas</div>
              </Link>
            </li>
            <li>
              <Link href="/elementos">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">Elementos</div>
              </Link>
            </li>
            <li>
              <Link href="/aspectos">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">Aspectos</div>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <div className="text-gray-400 hover:text-gray-100 transition-colors">FAQ</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
