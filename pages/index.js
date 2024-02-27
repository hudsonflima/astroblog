// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AstroImage from '../components/AstroImage'; // Importe o componente AstroImage
import Artigo01 from '../components/Artigo01'; // Componente para os artigos
import Artigo02 from '../components/Artigo02'; // Componente para os artigos
import Artigo03 from '../components/Artigo03'; // Componente para os artigos


const Home = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Head>
        <title>Home - Astroblog</title>
      </Head>
      <Header />
      <div className="relative min-h-screen">
        <AstroImage />
        <div className="absolute inset-1 justify-center items-center ">
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            <Artigo01 />
            <Artigo02 />
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            <Artigo03 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
