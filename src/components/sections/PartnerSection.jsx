import React from 'react';

import oracle from '../../images/partners/oracle.png';
import societeGenerale from '../../images/partners/societeGenerale.png';
import partner3 from '../../images/partners/partner3.png';
import partner4 from '../../images/partners/partner4.png';
import { Fade } from 'react-reveal';

export default function PartnerSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Trusted Partners Worldwide</h2>
            <p className='text-gray'>We're partners with countless major organisations around the globe</p>
          </div>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Fade up >
                <img src={oracle} className="basis-1/2 mt-8" alt="" />
              </Fade>
              <Fade up delay={200}>
                <img src={societeGenerale} className="basis-1/2 mt-7" alt="" />
              </Fade>
              <Fade up delay={400}>
                <img src={partner3} className="basis-1/2" alt="" />
              </Fade>
              <Fade up delay={600}>
                <img src={partner4} className="basis-1/2" alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
