import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';

const Peixestext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Peixes - Astroblog</title>
      </Head>
    <div className='bg-[#1c212e]'>
      <Header />
      <div className="flex justify-left mt-8 container ">
        <Link href="/signos/aquario">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
          </div>
        </Link>
        <Link href="/signos">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faHouse} title={'Signos'} />
          </div>
        </Link>
      </div>
      <div className="relative min-h-screen container">
        <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Peixes</h2>
        <div className="p-12 flex flex-1 gap-4">
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div className='flex items-center justify-right'>
              <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/12.webp" alt="aries" width={500} height={500} />
            </div>
            <div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Água</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Mutável</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 20/02 a 20/03</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Júpiter</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 12</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Reativo | Feminino - Yin</p>
              </div><div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Compreensão</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu dissolvo</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Dois peixes interligados</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Virgem</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Pés, glândula pineal, sistema linfático.</p>
            </div>

          </div>
        </div>
        <div>
          <div className='text-slate-400'>
            <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
          </div>
          <div className='container px-16 text-justify text-slate-400 pb-12'>
            Peixes, o último signo do zodíaco, é regido pelos planetas Júpiter e Netuno. Representado pelos peixes, simboliza a sensibilidade, compaixão e espiritualidade.
            Os piscianos são conhecidos por sua natureza empática e intuitiva. São seres profundamente sensíveis, capazes de captar as emoções e energias ao seu redor de forma intensa. Esta sensibilidade os torna excelentes ouvintes e conselheiros, pois têm a capacidade de compreender e acolher as preocupações dos outros sem julgamento.
            Por serem regidos pelo elemento água, os piscianos são muito receptivos às influências do ambiente e das pessoas ao seu redor. São sonhadores e imaginativos, muitas vezes vivendo em um mundo de fantasia e criatividade. Sua imaginação fértil os leva a buscar formas de expressão artística, como música, arte e escrita, onde podem canalizar suas emoções e inspirações.
            A espiritualidade desempenha um papel fundamental na vida dos piscianos. Eles têm uma forte conexão com o mundo espiritual e são naturalmente inclinados à introspecção e contemplação. Muitas vezes, encontram significado e propósito em práticas meditativas, yoga e outras formas de busca interior.
            Apesar de sua natureza gentil e compassiva, os piscianos também podem ser bastante suscetíveis ao mundo exterior. Sua sensibilidade pode torná-los vulneráveis ao estresse e à negatividade, e é importante para eles encontrar maneiras saudáveis ​​de proteger sua energia emocional.
            No entanto, essa mesma sensibilidade permite que os piscianos se conectem profundamente com os outros e com o universo ao seu redor. Eles têm uma capacidade única de ver além das aparências e compreender as complexidades da natureza humana. Como resultado, muitas vezes são capazes de oferecer conforto, compaixão e cura aos que estão ao seu redor.
            Em resumo, Peixes é um signo caracterizado pela sensibilidade, compaixão e espiritualidade. Os piscianos são seres intuitivos e imaginativos, capazes de mergulhar nas profundezas da alma humana em busca de significado e conexão. Sua empatia e compreensão os tornam verdadeiros guias espirituais e fontes de inspiração para aqueles que os rodeiam.
          </div>
        </div>
        <div className='text-slate-400'>
          <span className="font-light text-3xl text-gray-200 flex justify-center items-center">Características</span>
        </div>
        <div className="p-12 flex justify-center items-center capitalize">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Positivas</h3>
              <ul className="text-slate-400">
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>compassivo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>caridoso</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>simpático</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>emocional</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>sacrifica-se</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>intuitivo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>introspectivo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>musical</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>artístico</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
              <ul className="text-slate-400">
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>procrastinador</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>muito tagarela</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>melancólico</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>pessimista</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>emocionalmente inibido</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>tímido</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>sem praticidade</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>indolente</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>muitas vezes se sente incompreendido</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Peixestext