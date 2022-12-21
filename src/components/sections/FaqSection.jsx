import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import faq from '../../images/illustrations/faq.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={faq} alt="FAQ" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="">
         
            <h2 className="font-bold text-4xl mb-6 leading-normal">
            The ranking of the Hassania IT academy ecosystem
            </h2>
            <div className="text-gray font-sans text-xl">
              <FaqItem open={true} title="Why should I choose Hassania IT academy">
              Our mission is to guide you in your lifelong learning research. That's why everyone can express themselves! Our platform benefits from an active community of learner which reviews, collects badges and shares his experience by rating the Hassania IT academy . Then you can make your own opinion to take the course or not !</FaqItem>

              {/* 
                    <FaqItem open={false} title="How secure is NEFA?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="Do I have to buy a whole Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="How do I actually buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>

              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
