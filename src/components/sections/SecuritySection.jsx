import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import computer from '../../images/Computer.png';

import { Fade } from 'react-reveal';

export default function SecuritySection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <Fade up>
            <img src={computer} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
           Hassania IT academy: certifying online training
            </h2>
            <p className="text-gray font-sans text-xl">
                The Hassania IT academy, Hassania information technologie academy , is a new type of online training.  text content, discussion forums and validates its achievements with exercises.

Open by session or all year.
                </p>
          {/*  <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Safety, security and compliance
                </span>

              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Hardware security keys
                </span>
                <p className="text-gray">
                  With NEFA you can secure your account with a hardware security key via WebAuthn.
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  SOC Certifications
                </span>
                <p className="text-gray">
                  NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.
                </p>
              </li>
            </ul>
            */} 
          </div>
        </div>
      </div>
    </section>
  );
}
