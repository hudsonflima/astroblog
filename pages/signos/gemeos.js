import React from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Gemeostext = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Header />
      <div className="flex justify-left mt-8 container ml-10">
        <Link href="/signos/touro">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
          </div>
        </Link>
        <Link href="/signos/cancer">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
          </div>
        </Link>
      </div>
      <div className="relative min-h-screen container">
        <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Gêmeos</h2>
        <div className="p-12 flex flex-1 gap-4">
          <div className="grid grid-cols-4 gap-4">
            <div className='flex items-center justify-right'>
              <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/3.webp" alt="aries" width={500} height={500} />
            </div>
            <div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Ar</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Mutável</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 22/05 a 21/06</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Mercúrio</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 3</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Ativo | Masculino | Yang</p>
              </div>
            <div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Versatilidade</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu penso</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Algarismo Romano II</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Sagitário</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Pulmões, clavícula, brônquios, mãos, braços.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='text-slate-400'>
            <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
          </div>
          <div className='container px-16 text-justify text-slate-400 pb-12'>
            Gêmeos é o terceiro signo do zodíaco, regido pelo planeta Mercúrio. As pessoas nascidas sob o signo de Gêmeos são conhecidas por sua curiosidade inesgotável, versatilidade e habilidade de comunicação.
            Os geminianos são mentalmente ágeis e estão sempre em busca de novas experiências e conhecimentos. Eles são altamente adaptáveis e têm uma mente aberta, o que os torna capazes de se relacionar com uma variedade de pessoas e situações.
            A dualidade é uma característica central de Gêmeos, simbolizada pelos gêmeos Castor e Pólux da mitologia grega. Os geminianos muitas vezes exibem dois lados de sua personalidade, podendo ser comunicativos e sociáveis em um momento e sérios e contemplativos no próximo.
            Como um signo de ar, Gêmeos é intelectual e comunicativo, valorizando a troca de ideias e a exploração de diferentes pontos de vista. Os geminianos são conhecidos por sua eloquência e habilidade de expressar suas ideias de maneira persuasiva.
            No entanto, os geminianos também podem ser inconstantes e superficiais em seus relacionamentos e interesses, buscando constantemente novas estimulações e aventuras.
            Em resumo, Gêmeos é um signo caracterizado por sua curiosidade, versatilidade e habilidade de comunicação. Os geminianos são adaptáveis e intelectualmente estimulantes, buscando constantemente novas experiências e conhecimentos para alimentar sua mente inquisitiva.
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
                  </svg>Agradável</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Curioso</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Adaptável</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Expressivo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Perspicaz</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Literário</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Inventivo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Destro</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>Inteligente</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
              <ul className="text-slate-400">
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>Mutável</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>Ingrato</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>Estouvado</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>Intolerante</li>
                <li className="flex items-center capitalize">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>inquieto</li>
                <li className="flex items-center capitalize">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>intrigante</li>
                <li className="flex items-center capitalize">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>sem concentração</li>
                <li className="flex items-center capitalize">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>sem persistência</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gemeostext