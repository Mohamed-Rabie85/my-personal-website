import React from 'react';
import Image from 'next/image';

const ClientsSection = () => {
  const logos = [
    {
      src: '/logos/HELIOPOLIS.png',
      alt: 'HELIOPOLIS'
    },
    {
      src: '/logos/fast.png',
      alt: 'Fast scan'
    },
    {
      src: '/logos/wkalagroup.png',
      alt: 'Wkala Group'
    },

    {
      src: '/logos/smart.png',
      alt: 'Smart'
    },
    {
      src: '/logos/INFINITE.png',
      alt: 'INFINITE'
    },
    {
      src: '/logos/sunsir.png',
      alt: 'Sunsir'
    },
    {
      src: '/logos/Concept.png',
      alt: 'Concept'
    }
  ];

  return (
    <section className="bg-[var(--primary-medium)] text-white pt-8 pb-4">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">Our Clients</h2>
      <p className="text-center text-lg font-extralight leading-8">
        We are trusted by the worlds most innovative teams
      </p>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {logos.map((logo, index) => (
            <Image
              key={`first-${index}`}
              className="mx-4 inline h-16"
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={58}
              priority={index < 2} // تحميل أول صورتين بأولوية
            />
          ))}
        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {logos.map((logo, index) => (
            <Image
              key={`second-${index}`}
              className="mx-4 inline h-16"
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={58}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;