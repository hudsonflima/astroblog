// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <div className='pt-4'>
      <header className="bg-slate-950 text-white py-4 mx-8 px-8 rounded-xl">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <div className="text-xl font-bold">Astroblog</div>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/signos">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors'>Signos</div>
                </Link>
              </li>
              <li>
                <Link href="/casas">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors' >Casas</div>
                </Link>
              </li>
              <li>
                <Link href="/planetas">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors' >Planetas</div>
                </Link>
              </li>
              <li>
                <Link href="/elementos">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors' >Elementos</div>
                </Link>
              </li>
              <li>
                <Link href="/aspectos">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors' >Aspectos</div>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <div className='text-gray-400 hover:text-gray-100 transition-colors' >FAQ</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
