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
    },
    {
      src: '/logos/mohand.png',
      alt: 'Mohand'
    },
    {
      src: '/logos/city.png',
      alt: 'City'
    },
    {
      src: '/logos/eslam.png',
      alt: 'Eslam'
    },
    {
      src: '/logos/baiho.png',
      alt: 'Baiho'
    },
    {
      src: '/logos/winner.png',
      alt: 'Winner'
    },
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
    },
    {
      src: '/logos/mohand.png',
      alt: 'Mohand'
    },
    {
      src: '/logos/city.png',
      alt: 'City'
    },
    {
      src: '/logos/eslam.png',
      alt: 'Eslam'
    },
    {
      src: '/logos/baiho.png',
      alt: 'Baiho'
    },
    {
      src: '/logos/winner.png',
      alt: 'Winner'
    },
  ];

  return (
    <section className="w-full py-16 bg-[var(--primary-medium)] text-white pt-8 pb-4">
      <div className="section-container text-center">
        <h2 className="text-3xl font-bold mb-4">عملاء مميزون</h2>
        <p className="text-center text-lg font-extralight leading-8">
          أصنع النجاح مع من يصنعون المستقبل
        </p>

        <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-right-infinite group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="mx-4 inline-flex items-center h-[72px]"> {/* 72px = h-18 */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={58}
                  className="w-auto h-full object-contain"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>

          <div className="animate-slide-right-infinite group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="mx-4 inline-flex items-center h-[72px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={58}
                  className="w-auto h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;