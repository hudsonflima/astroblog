import React from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Escorpiaotext = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Header />
      <div className="flex justify-left mt-8 container ml-10">
        <Link href="/signos/libra">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        <Link href="/signos/sagitario">
          <div className="px-4 py-2 mx-2 bg-indigo-700 text-white rounded-md">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </div>
      <div className="relative min-h-screen container">
        <h2 className="text-3xl flex justify-center items-center text-center pt-4 text-gray-200">Escorpião</h2>
        <div className="p-12 flex flex-1 gap-4">
          <div className="grid grid-cols-4 gap-4">
            <div className='flex items-center justify-right'>
              <Image className='rounded-full w-48 shadow-lg shadow-black' src="/img/8.webp" alt="aries" width={500} height={500} />
            </div>
            <div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Elemento:</span> Água</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Qualidade:</span> Fixo</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Período solar:</span> +/- de 24/10 a 22/11</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Planeta regente:</span> Marte</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Natural da Casa:</span> 8</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Princípio:</span> Reativo | Feminino - Yin</p>
              </div><div>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Palavra-chave:</span> Intensidade</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Frase-chave:</span> Eu desejo</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Glifo:</span> Cauda e ferrão do escorpião</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Signo oposto:</span> Touro</p>
              <p className='text-slate-400'><span className="font-medium text-gray-200">Anatomia:</span> órgãos genitais, reto, ânus, urétra, próstata, intestino grosso.</p>
            </div>

          </div>
        </div>
        <div>
          <div className='text-slate-400'>
            <span className="font-light text-3xl pb-8 text-gray-200 flex justify-center items-center">Sobre</span>
          </div>
          <div className='container px-16 text-justify text-slate-400 pb-12'>
            Escorpião é o oitavo signo do zodíaco, regido pelos planetas Marte e Plutão. Pessoas nascidas sob o signo de Escorpião são conhecidas por sua intensidade, paixão e determinação.
            Os escorpianos são indivíduos extremamente apaixonados, tanto em seus relacionamentos pessoais quanto em seus objetivos e aspirações. Eles possuem uma profundidade emocional incomum e são capazes de mergulhar nas profundezas de suas próprias emoções e das emoções dos outros.
            Além disso, os escorpianos são altamente intuitivos e perspicazes. Eles têm a capacidade de detectar as nuances e os segredos escondidos nas situações e nas pessoas ao seu redor. Sua natureza observadora e analítica faz com que sejam excelentes em descobrir a verdade por trás das aparências.
            No entanto, os escorpianos também têm uma natureza desconfiada e podem ser bastante reservados em relação aos outros. Eles valorizam a lealdade e a confiança, mas podem levar tempo para realmente abrir seus corações e revelar sua verdadeira essência.
            Os escorpianos também são conhecidos por sua determinação e força de vontade inabaláveis. Uma vez que estabelecem um objetivo, eles estão dispostos a fazer o que for preciso para alcançá-lo, não importa os obstáculos que surjam em seu caminho.
            Em resumo, Escorpião é um signo caracterizado por sua intensidade emocional, paixão e determinação. Os escorpianos são indivíduos profundamente intuitivos e observadores, capazes de mergulhar nas profundezas das emoções e descobrir a verdade por trás das aparências. Sua determinação inabalável e sua busca pela verdade os tornam indivíduos poderosos e transformadores em todas as áreas de suas vidas.
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
                  </svg>motivado</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>penetrante</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>realizador</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>cheio de expedientes</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>determinado</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>científico</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>investigativo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>explorador</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>passional</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>consciente</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Negativas</h3>
              <ul className="text-slate-400">
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>vingativo</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>temperamental</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>arrogante</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>violento</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>sarcástico</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>desconfiado</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>ciumento</li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#EF4444" />
                    <path fill="#1F2937" d="M12.828 7.172a1 1 0 1 1 1.414 1.414L11.414 10l2.828 2.828a1 1 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L8.586 10 5.758 7.172a1 1 0 1 1 1.414-1.414L10 8.586l2.828-2.828a1 1 0 0 1 1.414 0z"></path>
                  </svg>intolerante</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Escorpiaotext