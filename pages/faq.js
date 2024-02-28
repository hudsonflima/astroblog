import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';


const signos = () => {
  return (
    <div className='bg-[#1c212e]'>
      <Head>
        <title>FAQ - Astroblog</title>
      </Head>
      <Header />
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-medium mb-4 text-gray-200">FAQ</h1>

          {/* Perguntas e respostas */}
          <div className="space-y-6 container px-12">
            {/* Questão 1 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">1. O que é Astrologia?</h2>
              <div className='text-slate-400'>A Astrologia é um sistema de conhecimento que estuda a posição e o movimento dos corpos celestes e sua influência sobre os eventos na Terra.</div>
            </div>

            {/* Questão 2 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">2. Qual é a diferença entre Astronomia e Astrologia?</h2>
              <div className='text-slate-400'>A Astronomia é uma ciência que estuda os corpos celestes e o universo, enquanto a Astrologia é uma prática que busca interpretar o significado simbólico dos corpos celestes em relação à vida na Terra.</div>
            </div>

            {/* Questão 3 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">3. Quais são os signos do Zodíaco?</h2>
              <div className='text-slate-400'>Os signos do Zodíaco são Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes.</div>
            </div>

            {/* Questão 4 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">4. Como os signos astrológicos são determinados?</h2>
              <div className='text-slate-400'>Os signos astrológicos são determinados pela posição do Sol no momento do nascimento de uma pessoa.</div>
            </div>

            {/* Questão 5 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">5. Qual é a importância do mapa astral na Astrologia?</h2>
              <div className='text-slate-400'>O mapa astral é uma representação dos posicionamentos dos corpos celestes no momento do nascimento de uma pessoa e é usado na Astrologia para traçar características individuais e prever eventos futuros.</div>
            </div>

            {/* Questão 6 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">6. Quais são os elementos e qual a sua relação com os signos?</h2>
              <div className='text-slate-400'>Os quatro elementos na Astrologia são fogo, terra, ar e água. Cada signo do Zodíaco está associado a um dos quatro elementos, que representam diferentes características e energias.</div>
            </div>

            {/* Questão 7 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">7. Qual é a diferença entre signo solar, signo lunar e signo ascendente?</h2>
              <div className='text-slate-400'>O signo solar é determinado pela posição do Sol no momento do nascimento, o signo lunar pela posição da Lua e o signo ascendente pelo signo que estava ascendendo no horizonte leste no momento do nascimento.</div>
            </div>

            {/* Questão 8 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">8. A Astrologia é uma ciência?</h2>
              <div className='text-slate-400'>A Astrologia não é considerada uma ciência no sentido convencional, pois não segue os métodos científicos de teste e verificação. É mais frequentemente vista como uma prática esotérica ou filosófica.</div>
            </div>

            {/* Questão 9 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">9. A Astrologia é baseada em evidências?</h2>
              <div className='text-slate-400'>Embora haja muitos defensores da Astrologia, a evidência científica para apoiar suas afirmações é amplamente contestada e não é reconhecida pela comunidade científica como válida.</div>
            </div>

            {/* Questão 10 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">10. Como a Astrologia é usada hoje em dia?</h2>
              <div className='text-slate-400'>A Astrologia é usada de várias maneiras, incluindo para autoconhecimento, orientação pessoal, previsão de tendências e eventos e até mesmo para aconselhamento terapêutico em algumas abordagens de psicologia.</div>
            </div>

            {/* Questão 11 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">11. Os signos astrológicos mudam ao longo do tempo?</h2>
              <div className='text-slate-400'>Os signos astrológicos são baseados na posição dos corpos celestes em relação à Terra e não mudam ao longo do tempo. No entanto, devido ao fenômeno da precessão dos equinócios, há uma pequena mudança nas datas associadas a cada signo ao longo dos séculos.</div>
            </div>

            {/* Questão 12 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">12. Qual é a diferença entre Astrologia ocidental e Astrologia chinesa?</h2>
              <div className='text-slate-400'>A Astrologia ocidental baseia-se principalmente na posição dos planetas, estrelas e outros corpos celestes em relação à Terra, enquanto a Astrologia chinesa utiliza um calendário lunar e se concentra em ciclos de doze anos representados por animais.</div>
            </div>

            {/* Questão 13 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">13. A posição dos planetas influencia realmente a vida das pessoas?</h2>
              <div className='text-slate-400'>Para os adeptos da Astrologia, a posição dos planetas reflete e influencia certos aspectos da vida das pessoas, como personalidade, relacionamentos e eventos importantes. No entanto, isso é objeto de debate e controvérsia.</div>
            </div>

            {/* Questão 14 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">14. Como a Astrologia é usada na tomada de decisões?</h2>
              <div className='text-slate-400'>Algumas pessoas usam a Astrologia como uma ferramenta de autoconhecimento e orientação pessoal ao tomar decisões importantes em suas vidas, como mudanças de carreira, relacionamentos e planejamento de eventos.</div>
            </div>

            {/* Questão 15 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">15. A Astrologia é uma prática religiosa?</h2>
              <div className='text-slate-400'>A Astrologia não é uma religião, mas algumas tradições religiosas e espirituais incorporaram elementos da Astrologia em suas práticas e crenças.</div>
            </div>

            {/* Questão 16 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">16. Quais são os principais ramos da Astrologia?</h2>
              <div className='text-slate-400'>Os principais ramos da Astrologia incluem Astrologia natal, Astrologia horária, Astrologia eletiva, Astrologia mundana e Astrologia médica, entre outros.</div>
            </div>

            {/* Questão 17 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">17. A Astrologia é compatível com a ciência moderna?</h2>
              <div className='text-slate-400'>A Astrologia é frequentemente vista como pseudociência pela comunidade científica devido à falta de evidências empíricas que apoiem suas alegações. No entanto, há um debate contínuo sobre sua compatibilidade com a ciência.</div>
            </div>

            {/* Questão 18 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">18. Quais são os diferentes métodos de previsão astrológica?</h2>
              <div className='text-slate-400'>Alguns métodos de previsão astrológica incluem trânsitos, progressões, direções secundárias, retorno solar e revolução lunar, entre outros.</div>
            </div>

            {/* Questão 19 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">19. A Astrologia é culturalmente relevante em todo o mundo?</h2>
              <div className='text-slate-400'>A Astrologia tem uma longa história e é praticada em diferentes culturas ao redor do mundo, embora sua popularidade e interpretação possam variar de uma região para outra.</div>
            </div>

            {/* Questão 20 */}
            <div>
              <h2 className="text-xl font-light text-gray-300">20. Como posso aprender mais sobre Astrologia?</h2>
              <div className='text-slate-400'>Existem muitos recursos disponíveis para aprender sobre Astrologia, incluindo livros, cursos online, consultores astrológicos e comunidades de estudo.</div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default signos