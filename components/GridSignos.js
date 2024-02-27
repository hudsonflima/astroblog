import Image from 'next/image';
import Link from 'next/link';

const signos = [
  'aries', 'touro', 'gemeos', 'cancer', 'leao', 'virgem',
  'libra', 'escorpiao', 'sagitario', 'capricornio', 'aquario', 'peixes'
];

const GridSignos = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-10 px-12 py-8">
        {signos.map((signo, index) => (
          <Link key={index} href={`/signos/${signo}`}>
            <div>
              <Image
                className='rounded-full w-48 shadow-lg shadow-black hover:scale-125 transition-all opacity-50 hover:opacity-100'
                src={`/img/${index + 1}.webp`}
                alt={`Imagem ${index + 1}`}
                width={500}
                height={500}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridSignos;
