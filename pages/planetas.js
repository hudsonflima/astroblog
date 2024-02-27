import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanetasAstrologicos = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Head>
        <title>Planetas - Astroblog</title>
      </Head>
      <Header />
      <div className="relative min-h-screen container mx-auto py-12 px-4">
        <h1 className="text-3xl text-gray-200 font-semibold mb-8 text-center">Os Planetas</h1>
        <p className="text-gray-400 mb-6">
          Aqui estão algumas informações sobre os principais planetas do sistema solar e sua influência na astrologia:
        </p>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">O Sol</h2>
          <p className='text-gray-400'>O Sol mostra-nos o verdadeiro fundo de uma pessoa, o ser interior, o que é de importância fundamental. Também nos mostra a vitalidade em geral, e a sua capacidade de afirmação. Descreve em geral a sua maneira de ser que dá cor a tudo o resto.</p>
          <p className='text-gray-400 italic'>Signo regente: Leão</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">A Lua</h2>
          <p className='text-gray-400'>A Lua representa os nossos sentimentos e emoções, a receptividade, imaginação e a forma básica de sentir de uma pessoa. Também tem um efeito no sentido do ritmo, do tempo e da ocasião, influencia a nossa capacidade de adaptação à mudança, bem como a nossa mobilidade e versatilidade.</p>
          <p className='text-gray-400 italic'>Signo regente: Câncer</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Mercúrio</h2>
          <p className='text-gray-400'>Mercúrio representa o sentido da razão (senso comum), aquele que é racional. Representa a palavra dita e escrita, a ordenação, o peso e a avaliação, o processo de aprendizagem e as aptidões.</p>
          <p className='text-gray-400 italic'>Signos regentes: Gêmeos e Virgem</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Vênus</h2>
          <p className='text-gray-400'>Vênus dá-nos o sentido da beleza, a alegria do prazer, o sentido de estética, o amor pela harmonia, a sociabilidade, o sentido de prazer nas relações e o erotismo.</p>
          <p className='text-gray-400 italic'>Signos regentes: Libra e Touro</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Marte</h2>
          <p className='text-gray-400'>Marte representa a energia e vitalidade de uma pessoa, a sua coragem, a determinação, a liberdade do impulso espontâneo. Também descreve a prontidão para as ações, a forma com que cada um parte para elas e ainda a simples agressividade.</p>
          <p className='text-gray-400 italic'>Signo regente: Áries</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Júpiter</h2>
          <p className='text-gray-400'>A procura do significado e do objetivo de vida do indivíduo, o otimismo, a esperança e o sentido de justiça, são representados por Júpiter. Também o são a fé, a filosofia básica de vida, a luta pelo desenvolvimento pessoal e o desejo de expansão.</p>
          <p className='text-gray-400 italic'>Signo regente: Sagitário</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Saturno</h2>
          <p className='text-gray-400'>Saturno mostra-nos como vivemos a realidade quando encontramos resistência e descobrimos as nossas limitações. Representa a consciência e as convicções morais, bem como as leis e as regras que escolhemos obedecer.</p>
          <p className='text-gray-400 italic'>Signo regente: Capricórnio</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Urano</h2>
          <p className='text-gray-400'>Urano é a intuição, transmite o impulso da inspiração e das ideias brilhantes. Uma abertura para tudo que é novo, desconhecido e invulgar.</p>
          <p className='text-gray-400 italic'>Signo regente: Aquário</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Netuno</h2>
          <p className='text-gray-400'>Este planeta dá-nos a suprasensibilidade, abre as portas para as experiências místicas e para o transcendental.</p>
          <p className='text-gray-400 italic'>Signo regente: Peixes</p>
          <br />
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-medium">Plutão</h2>
          <p className='text-gray-400'>Plutão mostra como lidamos com o poder, pessoal e alheio, seja esse poder exercido por outrem ou por nós próprios. Mostra como enfrentamos o demoníaco e o mágico, os nossos poderes regenerativos, a nossa capacidade de mudar radicalmente e de renascimento.</p>
          <p className='text-gray-400 italic'>Signo regente: Escorpião</p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlanetasAstrologicos;
