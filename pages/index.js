// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Artigo01 from '../components/Artigo01';
import Artigo02 from '../components/Artigo02';
import Artigo03 from '../components/Artigo03';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="Astroblog é sua plataforma principal para entusiastas da astrologia. Explore insights, aprenda sobre trânsitos, sinastria e efemérides, e participe de discussões significativas sobre o mundo místico da astrologia." />
        <meta name="keywords" content="astrologia, blog de astrologia, entusiastas da astrologia, insights de astrologia, trânsitos de astrologia, sinastria de astrologia, efemérides de astrologia" />
        <title>Home - Astroblog</title>
      </Head>
      <div className="bg-[#1c212e]">
        <Header />
        <div className="container items-center justify-center mx-auto gap-8 pt-8">
          <div className="flex flex-col md:flex-row md:gap-8 gap-8">
            <Artigo01 className="md:flex-1" /> {/* Adicione a classe pb-8 pt-8 para espaçamento inferior em dispositivos móveis */}
            <Artigo02 className="md:flex-1" /> {/* Se md:flex-1 não for necessário, pode ser omitido */}
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 items-center gap-8 justify-center pt-8 pb-8"> {/* Ajuste a classe conforme necessário */}
            <Artigo03 className="md:flex-1" /> {/* Se md:flex-1 não for necessário, pode ser omitido */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
