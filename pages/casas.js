import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CasasAstrologicas = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Head>
        <title>Casas - Astroblog</title>
      </Head>
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl text-gray-200 font-semibold mb-8 text-center">Casas Astrológicas</h1>
        <p className="text-gray-400 mb-6 text-justify">
          As casas astrológicas são doze divisões do céu, que representam áreas específicas da vida de uma pessoa. Cada casa possui uma influência única sobre diferentes aspectos da existência humana e é governada por um signo astrológico.
          A posição dos planetas e dos signos em cada casa do mapa astrológico de uma pessoa pode revelar informações importantes sobre sua personalidade, suas experiências de vida e suas tendências futuras.
          Aqui está um resumo das doze casas astrológicas e suas principais áreas de influência:
        </p>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">1ª Casa (Ascendente) | A personalidade individual</h2>
          <p className='text-gray-400 mb-6 text-justify'>Juntamente com o sol e a lua, o ascendente é um dos fatores mais importantes num horóscopo. O signo no princípio da primeira casa diz-nos imenso acerca da personalidade de uma pessoa, do seu temperamento e da sua constituição. Tipifica a nossa reação instintiva e mostra como nos apresentamos ao mundo. O planeta que rege o signo ascendente é de particular importância para a interpretação.</p>
          <p className='text-gray-400 italic'>Regente: Signo Ascendente</p>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">2ª Casa | Valores e Haveres</h2>
          <p className='text-gray-400 mb-6 text-justify'>A segunda casa e os seus ocupantes falam-nos acerca das condições materiais, da necessidade de comprar e da forma como lidamos com os haveres e as coisas materiais. Isto inclui a relação com o nosso próprio corpo.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Planeta regente: Vênus</span>
            <span className='text-gray-400 italic'>Signo regente: Touro</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">3ª Casa | Comunicação</h2>
          <p className='text-gray-400 mb-6 text-justify'>A terceira casa e todos os planetas que a ocupam falam-nos da forma como nós comunicamos na vida diária e das relações que determinam o nosso quotidiano.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Mercúrio</span>
            <span className='text-gray-400 italic'>Signo Regente: Gêmeos</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">4ª Casa | Raízes e Origens</h2>
          <p className='text-gray-400 mb-6 text-justify'>Esta casa descreve a nossa origem, a casa de família e as circunstâncias que influenciam a infância e a juventude. Descreve como nos relacionamos com a família, a nossa atitude para com o lar. A figura do pai e a relação com o pai real também é aqui que se encontra.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Lua</span>
            <span className='text-gray-400 italic'>Signo Regente: Câncer</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">5ª Casa | Prazer e Criatividade</h2>
          <p className='text-gray-400 mb-6 text-justify'>Esta é a casa da sexualidade e erotismo, mas também da vontade de brincar e todos os tipos de expressão criativa. Esta casa também descreve como nos relacionamos com as crianças, com o prazer e o divertimento.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Sol</span>
            <span className='text-gray-400 italic'>Signo Regente: Leão</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">6ª Casa | Trabalho e Rotina</h2>
          <p className='text-gray-400 mb-6 text-justify'>A sexta casa descreve as circunstâncias que nos rodeiam na nossa vida diária, incluindo o ambiente de trabalho e a rotina. Isto inclui o nosso comportamento para com os subordinados. A higiene e o cuidado com o corpo também aqui se encontram, assim como a tendência para contrair doenças.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Mercúrio</span>
            <span className='text-gray-400 italic'>Signo Regente: Virgem</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">7ª Casa | Relações</h2>
          <p className='text-gray-400 mb-6 text-justify'>O signo descendente e os planetas que ocupam a sétima casa dizem-nos como selecionamos os nossos parceiros e descreve as associações e relações que nós procuramos. Muitas vezes somos involuntariamente atraídos para pessoas cujos horóscopos têm uma grande ênfase no signo que está na nossa sétima casa.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Vênus</span>
            <span className='text-gray-400 italic'>Signo Regente: Libra</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">8ª Casa | Perda e Propriedade Comum</h2>
          <p className='text-gray-400 mb-6 text-justify'>A oitava casa mostra como nos relacionamos com os bens comuns e como lidamos com as perdas materiais. Os impostos que pagamos todos os anos são um bom exemplo disto e mostra como estas áreas estão estreitamente ligadas. A astrologia tradicional defende que esta casa tem uma afinidade com a morte e todas as coisas metafísicas. A morte seria então a perda material última. De entre outras coisas, o estudo da metafísica pode ser uma forma bastante diferente de lidar com esta perda, que inevitavelmente nos espera a todos.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Plutão</span>
            <span className='text-gray-400 italic'>Signo Regente: Escorpião</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">9ª Casa | Filosofia e Países distantes</h2>
          <p className='text-gray-400 mb-6 text-justify'>A nona casa descreve a nossa aprendizagem espiritual, a filosofia de vida e a nossa visão do mundo. Isto é de facto, frequentemente influenciado pelas viagens a países estrangeiros. As atitudes tidas e formadas nesta casa podem influenciar em muito os temas da décima casa. (ver abaixo)</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Júpiter</span>
            <span className='text-gray-400 italic'>Signo Regente: Sagitário</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">10ª Casa (MC) | Ocupação e Chamamento</h2>
          <p className='text-gray-400 mb-6 text-justify'>Esta casa é de particular importância, já que afeta não só a nossa escolha profissional e o nosso chamamento | é também muito importante para o nosso desenvolvimento em geral, aquilo em que nos tornamos. Isto prolonga-se pela nossa vida fora. De acordo com a tradição, bem como com experiências mais recentes, esta casa descreve a imagem da mãe e a relação com a mãe real.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Saturno</span>
            <span className='text-gray-400 italic'>Signo Regente: Capricórnio</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">11ª Casa | Amigos e Conhecidos</h2>
          <p className='text-gray-400 mb-6 text-justify'>A décima primeira casa mostra como nos relacionamos com os amigos, benfeitores e professores | as pessoas que nos querem bem ou com quem podemos aprender. Também nos mostra a nós nesse papel. Esta casa mostra como nos relacionamos com a sociedade em que vivemos.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Urano</span>
            <span className='text-gray-400 italic'>Signo Regente: Aquário</span>
          </div>
        </div>
        <div className="text-justify mb-8 px-12">
          <h2 className="text-gray-300 text-lg font-medium">12ª Casa | Para além do pessoal</h2>
          <p className='text-gray-400 mb-6 text-justify'>Esta casa representa aquelas esferas da vida onde o indivíduo já não representa um papel, onde nós recuamos para um enorme buraco ou nos deixamos cair nele. A astrologia tradicional vê os hospitais, prisões e instituições psiquiátricas nesta casa. Está também associada a mosteiros e outros retiros.</p>
          <div className='grid grid-cols-8 gap-2 mt-2'>
            <span className='text-gray-400 italic'>Astro Regente: Netuno</span>
            <span className='text-gray-400 italic'>Signo Regente: Peixes</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CasasAstrologicas;