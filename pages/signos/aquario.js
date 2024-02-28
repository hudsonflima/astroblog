import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Aquariotext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Aquário - Astroblog</title>
      </Head>
      <div className='bg-[#1c212e]'>
        <Header />
        <div className="flex justify-left mt-8 container ">
          <Link href="/signos/capricornio">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Link>
          <Link href="/signos/peixes">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
        <div className="relative min-h-screen container">
          <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Aquário</h2>
          <div className="p-12 flex flex-1 gap-4">
            <div className="grid grid-cols-4 gap-4">
              <div className='flex items-center justify-right'>
                <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/11.webp" alt="aries" width={500} height={500} />
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Ar</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Fixo</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 21/01 a 19/02</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Saturno</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 11</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Ativo | Masculino | Yang</p>
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Imaginação</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu imagino</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Ondas</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Leão</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Tornozelo, canela, tendão de Aquiles, panturrilha, sistema circulatório.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='text-slate-400'>
              <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
            </div>
            <div className='container px-16 text-justify text-slate-400 pb-12'>
              Aquário é o décimo primeiro signo do zodíaco, regido pelo planeta Urano. Representado pelo portador de água, Aquário é associado à inovação, originalidade e humanitarismo.

              Os aquarianos são conhecidos por sua mente progressista e sua visão única do mundo. Eles são verdadeiros pensadores independentes, sempre buscando novas maneiras de abordar os problemas e desafios da vida. A criatividade e a originalidade são características marcantes desse signo, que muitas vezes se destaca por sua individualidade e excentricidade.

              Uma das maiores forças dos aquarianos é sua habilidade de pensar além das fronteiras convencionais e desafiar o status quo. Eles estão sempre interessados ​​em explorar ideias e conceitos inovadores, muitas vezes à frente de seu tempo. Sua mente aberta e curiosidade insaciável os levam a buscar novas experiências e aventuras.

              Além disso, os aquarianos têm um forte senso de justiça e igualdade. Eles se preocupam profundamente com questões humanitárias e estão comprometidos com a promoção do bem-estar coletivo. Os aquarianos são defensores dos direitos individuais e da liberdade pessoal, e muitas vezes se envolvem em causas sociais e políticas que visam criar um mundo mais justo e equitativo.

              Apesar de sua natureza independente, os aquarianos valorizam muito suas amizades e relacionamentos. Eles são leais e solidários com seus entes queridos, e apreciam a diversidade e a autenticidade nas pessoas ao seu redor. Sua abertura para diferentes perspectivas e sua capacidade de se adaptar a diversas situações os tornam companheiros interessantes e estimulantes.

              Em resumo, Aquário é um signo de originalidade, inovação e humanitarismo. Os aquarianos são visionários que desafiam as normas estabelecidas e buscam criar um mundo mais inclusivo e progressista. Sua mente aberta e sua paixão por mudanças os tornam verdadeiros agentes de transformação em suas comunidades e no mundo em geral.
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
                    </svg>independente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>inventivo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>tolerante</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>individualista</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>progressista</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>artístico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>científico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>lógico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>humano</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>intelectual</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>altruísta</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
                <ul className="text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>imprevisível</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>temperamental</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>se aborrece com detalhes</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>frio</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>opiniões demasiadamente fixas</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>tímido</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>excêntrico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>impessoal</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>rebelde</li>
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

export default Aquariotext