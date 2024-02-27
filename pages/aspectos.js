import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AspectosAstrologicos = () => {

    const [imagemExpandida, setImagemExpandida] = useState(false);
    const [anguloExpandido, setAnguloExpandido] = useState(false);

    const toggleImagemExpandida = () => {
        setImagemExpandida(!imagemExpandida);
    };

    const toggleAnguloExpandido = () => {
        setAnguloExpandido(!anguloExpandido);
    };

    return (
        <div className='bg-[#1c212e]'>
            <Head>
                <title>Aspectos - Astroblog</title>
            </Head>
            <Header />
            <div className="relative min-h-screen container mx-auto py-12 px-12">
                <h1 className="text-3xl text-gray-200 font-semibold mb-8 text-center">Aspectos Astrológicos</h1>
                <p className="text-gray-400 mb-6">
                    As relações angulares entre os planetas num horóscopo, medidas como ângulos dentro do círculo eclíptico, são chamadas de aspectos. Essas relações influenciam a forma como os planetas se comportam entre si e têm qualidades intrínsecas, sendo harmônicas, dinâmicas ou neutras. Aqui estão alguns dos aspectos maiores:
                </p>
                <div className="flex items-center mb-8 gap-8">
                    <Image src="/svg/conjuncao.svg" alt='' width={100} height={100} />
                    <div>
                        <h2 className="text-gray-300 text-lg font-medium">Conjunção - 0°</h2>
                        <p className='text-gray-400'>A conjunção tende a ser um aspecto harmonioso, dependendo dos planetas envolvidos e da proximidade do aspecto. Por exemplo, uma conjunção entre o Sol e Mercúrio é normalmente vista como harmoniosa.</p>
                        <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 0°</p>
                    </div>
                </div>

                <div className="flex items-center mb-8 gap-8">
                    <Image src="/svg/oposicao.svg" alt='' width={100} height={100} />
                    <div>
                        <h2 className="text-gray-300 text-lg font-medium">Oposição - 180°</h2>
                        <p className='text-gray-400'>Apesar da oposição ser normalmente vista como desarmoniosa ou dinâmica, muitas vezes tem um efeito motivador e energizante, dependendo dos planetas envolvidos.</p>
                        <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 180°</p>
                    </div>
                </div>

                <div className="flex items-center mb-8 gap-8">
                    <Image src="/svg/quadratura.svg" alt='' width={100} height={100} />
                    <div>
                        <h2 className="text-gray-300 text-lg font-medium">Quadratura - 90°</h2>
                        <p className='text-gray-400'>A quadratura é considerada um aspecto desarmonioso, indicando tensão entre os planetas envolvidos.</p>
                        <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 90°</p>
                    </div>
                </div>

                <div className="flex items-center mb-8 gap-8">
                    <Image src="/svg/trigono.svg" alt='' width={100} height={100} />
                    <div>
                        <h2 className="text-gray-300 text-lg font-medium">Trígono - 120°</h2>
                        <p className='text-gray-400'>O trígono é um aspecto harmonioso, onde os planetas envolvidos trabalham juntos de forma complementar.</p>
                        <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 120°</p>
                    </div>
                </div>

                <div className="flex items-center mb-8 gap-8">
                    <Image src="/svg/sextil.svg" alt='' width={100} height={100} />
                    <div>
                        <h2 className="text-gray-300 text-lg font-medium">Sextil - 60°</h2>
                        <p className='text-gray-400'>O sextil tende a ser um aspecto harmonioso, dependendo dos planetas envolvidos.</p>
                        <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 60°</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-gray-300 text-lg font-medium">Aspectos Menores</h2>
                    <p className='text-gray-400 mb-12'>Além dos aspectos maiores, existem aspectos menores que contribuem com profundidade e detalhe no quadro geral do horóscopo.</p>
                    <div>
                        <div className="flex items-center mb-8 mr-10">
                            <Image src="/svg/sesquiquadratura.svg" width={100} alt='' height={100} />
                            <div className="ml-10">
                                <h2 className="text-gray-300 text-lg font-medium">Sesquiquadratura - 135°, desarmonioso</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 135°</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-8 mr-10">
                            <Image src="/svg/semisextil.svg" alt='' width={100} height={100} />
                            <div className="ml-10">
                                <h2 className="text-gray-300 text-lg font-medium">Semisextil - 30°, neutro</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 30°</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-8 mr-10">
                            <Image src="/svg/quincuncio.svg" alt='' width={100} height={100} />
                            <div className="ml-10">
                                <h2 className="text-gray-300 text-lg font-medium">Quincúncio ou Inconjunção - 150°, neutro</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 150°</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-8">
                            <span className='text-white text-6xl font-extralight mr-16 ml-8'>Q</span>
                            <div>
                                <h2 className="text-gray-300 text-lg font-medium">Quintil - 72°, harmonioso</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 72°</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-8">
                            <span className='text-white text-6xl font-extralight ml-8 mr-8'>bQ</span>
                            <div>
                                <h2 className="text-gray-300 text-lg font-medium">Biquintil - 144°, harmonioso</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 144°</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-8 mr-10">
                            <Image src="/svg/semiquadratura.svg" alt='' width={100} height={100} />
                            <div className="ml-10">
                                <h2 className="text-gray-300 text-lg font-medium">Semiquadratura - 45°, desarmonioso</h2>
                                <p className='text-gray-400 italic'>Regência/Predominância do ângulo: 45°</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='container'>
                    <div className='text-gray-300 text-lg font-medium mb-12'>
                        Veja abaixo as imagens representativas com os ângulos formados por cada aspecto.<br />
                    </div>

                    <div className={`gap-12 astro-image-container ${imagemExpandida ? 'expanded' : ''}`} onClick={toggleImagemExpandida}>
                        <Image
                            src="/aspects.jpg"
                            alt="Aspectos"
                            title='Aspectos'
                            width={imagemExpandida ? 750 : 500}
                            height={imagemExpandida ? 750 : 500}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>

                    <div className={`gap-12 astro-image-container ${anguloExpandido ? 'expanded' : ''}`} onClick={toggleAnguloExpandido}>
                        <Image
                            src="/angulos.png"
                            title='Ângulos dos Aspectos'
                            alt="Ângulos"
                            width={anguloExpandido ? 750 : 500}
                            height={anguloExpandido ? 750 : 500}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>

                    <div className={`overlay ${imagemExpandida || anguloExpandido ? 'active' : ''}`} onClick={() => { setImagemExpandida(false); setAnguloExpandido(false) }}></div>

                    <style jsx>
                        {
                            `
                    .container {
                        position: relative;
                    }
                    .astro-image-container {
                        cursor: pointer;
                    }
                    .astro-image-container img {
                        max-width: 100%;
                        height: auto;
                        transition: transform 0.3s ease;
                    }
                    .astro-image-container.expanded img {
                        transform: scale(1.5); 
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 9999;
                    }
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5); 
                        z-index: 9998;
                        display: ${imagemExpandida || anguloExpandido ? 'block' : 'none'};
                    }
                    `
                        }
                    </style>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AspectosAstrologicos;