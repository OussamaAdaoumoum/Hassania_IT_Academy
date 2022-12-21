import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import SecondaryButton from '../buttons/SecondaryButton';
import computercourses from '../../images/computercourses.png';
import { Fade } from 'react-reveal';

export default function CreditCardSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
          <Fade up>
            <img src={computercourses} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
            Hassnia IT Academy
            </h2>
            <p className="text-gray font-sans text-xl">
           Innovative training
Become who you want to be with Hassnia IT Academy. Choose your career. Follow a training consisting of professional projects and individual sessions with a dedicated mentor each week. Get a state-recognized degree. Enrich your CV with the work-study programs offered by Hassnia It academy and earn a salary while following your training.</p>

          </div>
        </div>
      </div>
    </section>
  );
}
