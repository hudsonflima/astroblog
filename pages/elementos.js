import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const QuatroElementos = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Head>
        <title>Quatro Elementos - Astroblog</title>
      </Head>
      <Header />
      <div className="relative min-h-screen container mx-auto py-12 px-12">
        <h1 className="text-3xl text-gray-200 font-semibold mb-8 text-center">Os Quatro Elementos e o Zodíaco</h1>
        <p className="text-gray-400 mb-6">
          O fato de os signos astrológicos estarem associados a certas constelações astronômicas gerou grande confusão entre os astrólogos e não-astrólogos. Basicamente, o nosso zodíaco e os signos são não mais do que uma escala circular de 360 graus. Cada uma das doze seções deste círculo tem determinadas características, baseadas em qualidades associadas com os elementos.
        </p>
        <p className="text-gray-400 mb-6">
          A tradição vê o universo constituído pelos elementos fogo, ar, água e terra. Quando aplicamos este sistema às personalidades, os elementos representam certos traços básicos e dão um certo temperamento. Isto varia de acordo com a ênfase dos elementos no horóscopo. Qualquer posicionamento dos planetas ou pontos pessoais num signo constituem uma ênfase.
        </p>
        <p className="text-gray-400 mb-6">
          Os quatro elementos podem ser vistos como os quatro princípios básicos de vida. Isto pode ser aplicado a todo o gênero de coisas segundo os princípios da similaridade e analogia. C.G. Jung abriu a porta para um moderno entendimento destas categorias, desenvolvendo uma tipologia, em que cada um dos elementos corresponde a quatro funções básicas da psique. A ênfase ou não-ênfase dos elementos no horóscopo individual revela aspectos fundamentais da personalidade.
        </p>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/fire.png" width={350} alt='' height={300} className="rounded-full rotate-90" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Fogo</h2>
            <p className="text-gray-400">
              As pessoas com uma ênfase forte do elemento de fogo são espontâneas e impulsivas e usam as suas energias com todo o entusiasmo. A sua resposta emocional é rápida e têm uma imaginação muito viva.
            </p>
            <p className="text-gray-400 italic">Signos de Fogo: <span className='text-red-400'>Áries, Leão e Sagitário</span></p>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/air.png" width={300} alt='' height={300} className="rounded-full rotate-90" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Ar</h2>
            <p className='text-gray-400'>As pessoas de ar são rápidas e animadas. Usam as suas energias de formas muito variadas. Têm tendência para intelectualizar os seus sentimentos e expectativas.</p>
            <p className='text-gray-400 italic'>Signos de Ar: <span className='text-yellow-400'>Libra, Aquário, Gêmeos</span></p>
            <br />
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/water.png" width={300} alt='' height={300} className="rounded-full rotate-180" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Água</h2>
            <p className='text-gray-400'>As pessoas com uma forte ênfase do elemento água são sentimentais e muito sensíveis. As suas capacidades emocionais e imaginativas são profundas e ricas.</p>
            <p className='text-gray-400 italic'>Signos de Água: <span className='text-blue-400'>Câncer, Escorpião, Peixes</span></p>
            <br />
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/earth.png" width={300} alt='' height={300} className="rounded-full rotate-180" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Terra</h2>
            <p className='text-gray-400'>As pessoas de terra reagem silenciosa e lentamente. Elas empenham-se com <i>endurance</i>. Emocionalmente elas são fortemente enraizadas e lentas na mudança.</p>
            <p className='text-gray-400 italic'>Signos de Terra: <span className='text-green-400'>Capricórnio, Touro, Virgem</span></p>
            <br />
          </div>
        </div>
        <p className="text-gray-400 mb-6">
          Fontes tradicionais ocidentais também consideram um quinto elemento a quinta essência. Esta descreve simplesmente a alma ou o ser espiritual de uma pessoa. Fica separado dos outros quatro elementos e não é descrito no horóscopo. Esta é a razão por que é frequentemente desprezado. Leva-nos para além da doutrina dos quatro elementos e da sua aplicação no campo da astrologia. Refere-se à liberdade do homem e alerta-nos para o grande mistério da eternidade.
        </p>
        <p className="text-gray-400 mb-6">
          Estados elementares ou Qualidades: Cada um dos quatro elementos encontra-se em três estados ou qualidades, respectivamente chamados de cardeal, fixo e mutável ou estado comum. Podemos considerar as propriedades físicas da água como analogia: nela também, os elementos químicos se encontram em vários estados. A água, por exemplo, é líquida no seu estado normal, real. Visto astrologicamente, este seria o estado cardeal. Quando congelada fica em forma sólida, astrologicamente este corresponde ao estado fixo. Quando aquecida, transforma-se em vapor de água, comparável ao estado mutável em astrologia. No horóscopo individual, o posicionamento dos planetas em signos cardeal, fixo ou mutável também mostram os traços básicos da personalidade.
        </p>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/cardinal.png" width={300} alt='' height={300} className="rounded-full rotate-180" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Cardeal</h2>
            <p className='text-gray-400'>As pessoas com ênfase em signos cardeais têm uma forte propensão para a liderança e para moldar as coisas. Têm forte espírito de iniciativa e agem de acordo com os seus objetivos e metas.</p>
            <p className='text-gray-400 italic'>Signos Cardeais: <span className='text-red-400'>Carneiro, Balança, Caranguejo, Capricórnio</span></p>
            <br />
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/fixo.png" width={350} alt='' height={350} className="rounded-full rotate-180" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Fixo</h2>
            <p className='text-gray-400'>As pessoas com ênfase em signos fixos têm um desejo de construir no que já existe e de o organizar de forma mais eficiente. Eles tendem a preservar o Status Quo e agem em resposta às circunstâncias existentes.</p>
            <p className='text-gray-400 italic'>Signos Fixos: <span className='text-green-400'>Leão, Aquário, Escorpião, Touro</span></p>
            <br />
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <Image src="/mutavel.png" width={350} alt='' height={350} className="rounded-full rotate-180" />
          </div>
          <div>
            <h2 className="text-gray-300 text-lg font-medium">Mutável</h2>
            <p className='text-gray-400'>As pessoas com ênfase nos signos mutáveis ou comuns tendem a procurar mudança e renovação. Elas podem facilmente trocar uma coisa por outra e alinhar as suas ações de acordo com a mudança sem hesitações.</p>
            <p className='text-gray-400 italic'>Signos Mutáveis: <span className='text-yellow-400'>Sagitário, Gémeos, Peixes, Virgem</span></p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuatroElementos;
