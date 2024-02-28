import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Virgemtext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Áries - Astroblog</title>
      </Head>
      <div className='bg-[#1c212e]'>
        <Header />
        <div className="flex justify-left mt-8 container ">
          <Link href="/signos/leao">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
            </div>
          </Link>
          <Link href="/signos/libra">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
            </div>
          </Link>
        </div>
        <div className="relative min-h-screen container">
          <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Virgem</h2>
          <div className="p-12 flex flex-1 gap-4">
            <div className="grid grid-cols-4 gap-4">
              <div className='flex items-center justify-right'>
                <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/6.webp" alt="aries" width={500} height={500} />
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Terra</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Mutável</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 24/08 a 23/09</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Mercúrio</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 6</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Reativo | Feminino - Yin</p>
              </div><div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Praticidade</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu analiso</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Grafia da palavra virgem em grego</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Peixes</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Intestino delgado, duodeno, baço, produção de enzimas, pâncreas, vesícula.</p>
              </div>

            </div>
          </div>
          <div>
            <div className='text-slate-400'>
              <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
            </div>
            <div className='container px-16 text-justify text-slate-400 pb-12'>
              Virgem é o sexto signo do zodíaco, regido pelo planeta Mercúrio. As pessoas nascidas sob o signo de Virgem são conhecidas por sua meticulosidade, atenção aos detalhes e senso prático.
              Os virginianos são organizados e analíticos por natureza. Eles têm uma habilidade natural para perceber os pequenos detalhes e são excelentes em resolver problemas complexos. Sua mente lógica e analítica os torna ótimos em planejar e executar tarefas com eficiência.
              Além disso, os virginianos valorizam a ordem e a disciplina em suas vidas. Eles se esforçam para manter tudo ao seu redor organizado e funcional, e têm um forte desejo de alcançar a perfeição em tudo o que fazem.
              Os virginianos também são conhecidos por sua natureza prática e humilde. Eles preferem ações a palavras e estão sempre prontos para oferecer ajuda prática aos outros. Sua natureza prestativa e confiável os torna amigos leais e parceiros de confiança.
              No entanto, os virginianos também podem ser críticos consigo mesmos e com os outros. Eles têm padrões elevados e podem ser muito exigentes, tanto consigo mesmos quanto com aqueles ao seu redor. No entanto, essa autocrítica vem de um desejo genuíno de melhorar e crescer.
              Em resumo, Virgem é um signo caracterizado por sua meticulosidade, pragmatismo e senso de organização. Os virginianos são trabalhadores dedicados e amigos confiáveis, que valorizam a ordem e a eficiência em todas as áreas de suas vidas.
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
                    </svg>diligente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>estudioso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>científico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>metódico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>discriminativo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>apurador de fatos</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>asseado</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>humano</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>busca a perfeição</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
                <ul className="text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>crítico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>mesquinho</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>melancólico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>egocêntrico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>tem medo da doença e da pobreza</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>difícil de agradar</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>pedante</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>cético</li>
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

export default Virgemtext