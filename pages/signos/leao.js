import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Leaotext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Áries - Astroblog</title>
      </Head>
      <div className='bg-[#1c212e]'>
        <Header />
        <div className="flex justify-left mt-8 container ">
          <Link href="/signos/cancer">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
            </div>
          </Link>
          <Link href="/signos/virgem">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
            </div>
          </Link>
        </div>
        <div className="relative min-h-screen container">
          <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Leão</h2>
          <div className="p-12 flex flex-1 gap-4">
            <div className="grid grid-cols-4 gap-4">
              <div className='flex items-center justify-right'>
                <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/5.webp" alt="aries" width={500} height={500} />
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Fogo</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Fixo</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 24/07 a 23/08</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Sol</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 5</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Ativo | Masculino | Yang</p>
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Magnetismo</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu apareço</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Cauda do leão</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Aquário</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Coração, aorta, coluna cervical, meio das costas, circulação sanguínea.</p>
              </div>

            </div>
          </div>
          <div>
            <div className='text-slate-400'>
              <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
            </div>
            <div className='container px-16 text-justify text-slate-400 pb-12'>
              Leão é o quinto signo do zodíaco, regido pelo Sol. As pessoas nascidas sob o signo de Leão são conhecidas por sua confiança, generosidade e carisma magnético.

              Assim como o leão, o símbolo deste signo, os leoninos tendem a ser dominantes e destemidos em suas abordagens à vida. Eles têm uma presença marcante e uma habilidade natural para liderar e inspirar os outros ao seu redor.

              Os leoninos adoram ser o centro das atenções e geralmente possuem uma natureza extrovertida e expressiva. Eles prosperam em situações sociais e são frequentemente os protagonistas em qualquer ambiente.

              Além disso, os leoninos têm um forte senso de dignidade e orgulho pessoal, buscando constantemente reconhecimento e admiração por suas habilidades e conquistas. Eles se esforçam para deixar uma marca duradoura no mundo e são motivados pela busca da excelência em tudo o que fazem.

              No entanto, por trás de sua exterioridade confiante, os leoninos podem ser extremamente sensíveis e emocionais. Eles valorizam profundamente os relacionamentos pessoais e estão sempre prontos para proteger e apoiar aqueles que amam.

              Em resumo, Leão é um signo caracterizado por sua confiança, generosidade e carisma. Os leoninos são líderes naturais, que buscam o reconhecimento e a admiração, enquanto também valorizam profundamente os laços pessoais e a lealdade em seus relacionamentos.
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
                    </svg>dramático (práticas da dramaturgia)</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>idealista</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>orgulhoso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>ambicioso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>criativo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>majestoso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>romântico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>generoso</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
                <ul className="text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>vaidoso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>preocupado com o seu status</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>arrogante</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>tem medo do ridículo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>cruel</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>jactancioso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>pretensioso</li>
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

export default Leaotext