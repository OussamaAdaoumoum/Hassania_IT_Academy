import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import logo from '../../images/logo.svg';
import logo_white_background from '../../images/logo_white_background.png';
import PrimaryButton from '../buttons/PrimaryButton';

export default function Footer() {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className='mb-6 w-24'>
              <img src={logo_white_background} alt="" />
            </div>
           {/* <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Buy Crypto</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Exchanges</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Watchlist</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Portfolio</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>NFT</a>
              </li>
            </ul>*/} 
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <h3>About Hassania IT academy</h3>
                
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'> Our Story</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Training experience</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Empower Us</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Security</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>

              <li className='mb-4'>
              Community
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Learners</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Partners</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Developers</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Teaching Center</a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className='text-gray'>Newsletter</span>
            <p className='text-gray font-thin'>Never miss anything when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2022 Hassania IT Club. All rights reserved</p>

      </div>
    </footer>
  );
}
