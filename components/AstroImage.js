// components/AstroImage.js
import Image from 'next/image';

const AstroImage = () => {
  return (
    <div className="astro-image-container">
      <div className="rounded-optimal overflow-hidden opacity-100">
        <Image src="/astro.png" alt="Astrology" width={500} height={500} />
      </div>
    </div>
  );
};

export default AstroImage;
