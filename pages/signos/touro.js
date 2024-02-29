import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Tourotext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Touro - Astroblog</title>
      </Head>
      <div className='bg-[#1c212e]'>
        <Header />
        <div className="flex justify-left mt-8 container ">
          <Link href="/signos/aries">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
            </div>
          </Link>
          <Link href="/signos/gemeos">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
            </div>
          </Link>
        </div>
        <div className="relative min-h-screen container">
          <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Touro</h2>
          <div className="p-12 flex flex-1 gap-4">
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-4">
              <div className='flex items-center justify-right'>
                <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/2.webp" alt="aries" width={500} height={500} />
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Terra</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Fixo</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 21/04 a 21/05</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Vênus</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 2</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Reativo | Feminino - Yin</p>
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Estabilidade</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu tenho</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Cabeça e chifres do touro</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Escorpião</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Pescoço, garganta, ouvido, cordas vocais, tireóide, língua, boca, amígdalas.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='text-slate-400'>
              <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
            </div>
            <div className='container px-16 text-justify text-slate-400 pb-12'>
              Touro é o segundo signo do zodíaco e é regido pelo planeta Vênus. As pessoas nascidas sob o signo de Touro são conhecidas por sua determinação, estabilidade e apreço pelos prazeres sensoriais da vida.
              Os taurinos são frequentemente descritos como pacientes e persistentes, buscando segurança e conforto em todas as áreas de suas vidas. Eles valorizam a estabilidade financeira e emocional e trabalham duro para alcançar seus objetivos a longo prazo.
              Como um signo de terra, Touro é associado à praticidade, sensibilidade e conexão com a natureza. Os taurinos têm um forte vínculo com o mundo material e apreciam os prazeres simples da vida, como boa comida, conforto e beleza estética.
              Os taurinos também são conhecidos por sua lealdade e confiabilidade em relacionamentos. Eles valorizam a intimidade e estão dispostos a investir tempo e esforço em seus relacionamentos mais importantes.
              No entanto, os taurinos também podem ser teimosos e possessivos em algumas situações, resistindo a mudanças e sendo relutantes em abandonar o que conhecem e valorizam.
              Em resumo, Touro é um signo caracterizado por sua estabilidade, determinação e apreciação pelos prazeres simples da vida. Os taurinos são leais e confiáveis, buscando segurança e conforto em todas as áreas de suas vidas.
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
                    </svg>paciente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>conservador</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>doméstico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>sensual</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>escrupuloso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>estável</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Independente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>digno de confiança</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>prático</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>artístico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>leal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
                <ul className="text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>auto-indulgente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>teimoso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>lento</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>propenso a discutir</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>irascível</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>possessivo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>guloso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>materialista</li>
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

export default Tourotext