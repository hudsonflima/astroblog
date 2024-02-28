import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Libratext = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signo de Áries - Astroblog</title>
      </Head>
      <div className='bg-[#1c212e]'>
        <Header />
        <div className="flex justify-left mt-8 container ">
          <Link href="/signos/virgem">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
            </div>
          </Link>
          <Link href="/signos/escorpiao">
            <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
              <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
            </div>
          </Link>
        </div>
        <div className="relative min-h-screen container">
          <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Libra</h2>
          <div className="p-12 flex flex-1 gap-4">
            <div className="grid grid-cols-4 gap-4">
              <div className='flex items-center justify-right'>
                <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/7.webp" alt="aries" width={500} height={500} />
              </div>
              <div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Ar</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Cardinal</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 24/09 a 23/10</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Vênus</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 7</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Ativo | Masculino | Yang</p>
              </div><div>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Harmonia</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu equilibro</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Balança</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Áries</p>
                <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Rins, ureter, bexiga, veias, pele, sistema endócrino, parte inferior das costas (lombar), glândulas adrenais.</p>
              </div>

            </div>
          </div>
          <div>
            <div className='text-slate-400'>
              <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
            </div>
            <div className='container px-16 text-justify text-slate-400 pb-12'>
              Libra é o sétimo signo do zodíaco, regido pelo planeta Vênus. Pessoas nascidas sob o signo de Libra são conhecidas por sua natureza gentil, equilibrada e sociável.
              Os librianos valorizam a harmonia e a beleza em todas as áreas de suas vidas. Eles são naturalmente diplomáticos e têm uma habilidade inata para resolver conflitos e encontrar soluções pacíficas. Sua natureza pacífica e tolerante os torna queridos entre amigos e colegas.
              Além disso, os librianos são conhecidos por sua apreciação pela estética e pelo bom gosto. Eles são atraídos pela arte, música e cultura, e muitas vezes buscam criar ambientes belos e elegantes ao seu redor.
              Os librianos também são sociáveis e adoram estar cercados por outras pessoas. Eles são ótimos ouvintes e têm uma habilidade natural para entender as necessidades e os sentimentos dos outros. Sua capacidade de ver todos os lados de uma situação os torna excelentes mediadores e conselheiros.
              No entanto, os librianos podem ter dificuldade em tomar decisões, já que muitas vezes buscam o equilíbrio e a justiça em todas as situações. Eles podem se ver indecisos diante de escolhas difíceis, pois desejam evitar conflitos e agradar a todos ao seu redor.
              Em resumo, Libra é um signo caracterizado por sua natureza gentil, equilibrada e sociável. Os librianos valorizam a harmonia, a beleza e a justiça em todas as áreas de suas vidas, buscando sempre criar um ambiente de paz e cooperação ao seu redor.
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
                    </svg>cooperativo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>persuasivo</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>amistoso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>amante da paz</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>refinado</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>imparcial</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Independente</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>artístico</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>diplomata</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>sociável</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
                <ul className="text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>inconstante</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>apático</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>intrigante</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>a paz a qualquer preço</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>rabugento</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>indeciso</li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="#EF4444" />
                      <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                    </svg>desanima facilmente</li>
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

export default Libratext