import React from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sagitariotext = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Header />
      <div className="flex justify-left mt-8 container ml-10">
        <Link href="/signos/escorpiao">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowLeft} title={'Signo anterior'} />
          </div>
        </Link>
        <Link href="/signos/capricornio">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowRight} title={'Próximo signo'} />
          </div>
        </Link>
      </div>
      <div className="relative min-h-screen container">
        <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Sagitário</h2>
        <div className="p-12 flex flex-1 gap-4">
          <div className="grid grid-cols-4 gap-4">
            <div className='flex items-center justify-right'>
              <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/9.webp" alt="aries" width={500} height={500} />
            </div>
            <div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Fogo</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Mutável</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 23/11 a 21/12</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Júpiter</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 9</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Ativo | Masculino | Yang</p>
            </div><div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Visualização</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu compreendo</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Flecha do arqueiro</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Gêmeos</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> Fígado, quadris, coxas, nervo ciático, sacro.</p>
            </div>

          </div>
        </div>
        <div>
          <div className='text-slate-400'>
            <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
          </div>
          <div className='container px-16 text-justify text-slate-400 pb-12'>
            Sagitário é o nono signo do zodíaco, regido pelo planeta Júpiter. As pessoas nascidas sob o signo de Sagitário são conhecidas por sua natureza otimista, aventureira e expansiva.
            Os sagitarianos são espíritos livres por excelência, sempre em busca de novas experiências e aventuras. Eles têm uma sede insaciável de conhecimento e estão constantemente em busca de novas ideias, culturas e filosofias que possam ampliar seus horizontes mentais.
            A liberdade é extremamente importante para os sagitarianos, e eles resistem a qualquer forma de restrição ou limitação. Eles valorizam sua independência e autonomia, e podem se sentir sufocados em ambientes ou relacionamentos que os impeçam de explorar e expandir seus horizontes.
            Além disso, os sagitarianos são conhecidos por sua sinceridade e franqueza. Eles dizem o que pensam, sem rodeios, e valorizam a honestidade e a autenticidade em todas as interações. No entanto, essa mesma franqueza pode às vezes ser interpretada como insensibilidade, já que os sagitarianos tendem a priorizar a verdade acima das preocupações com os sentimentos alheios.
            Os sagitarianos são também muito generosos e altruístas, e muitas vezes se envolvem em causas humanitárias e filantrópicas. Eles têm uma forte crença no poder do progresso e da mudança positiva, e estão sempre dispostos a lutar por aquilo em que acreditam.
            Em resumo, Sagitário é um signo caracterizado por sua natureza otimista, aventureira e expansiva. Os sagitarianos são espíritos livres que valorizam a liberdade, a honestidade e a busca pelo conhecimento. Sua sede de aventura e sua crença no poder do progresso os tornam indivíduos inspiradores e transformadores em todas as áreas de suas vidas.
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
                  </svg>honesto</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>filosófico</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>amante da liberdade</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>tolerante</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>atlético</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>generoso</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>otimista</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>justo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>religioso</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>estudioso</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>entusiástico</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
              <ul className="text-slate-400">
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>inclinado a discussões</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>exagerado</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>tagarela</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>procrastinador</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>auto-indulgente</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>brusco</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>impaciente</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>jogador</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>intrometido</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>irascível</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sagitariotext