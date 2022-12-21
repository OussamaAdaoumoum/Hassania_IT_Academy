import React from 'react';
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from 'react-icons/fa';

// import globoCrypto from '../../images/illustrations/globe.png';
import globoCrypto from '../../images/firstImage.png';
import PrimaryButton from '../buttons/PrimaryButton';
import BlueCircleParticle from '../particles/BlueCircleParticle';
import OrangeCircleParticle from '../particles/OrangeCircleParticle';
import StarParticle from '../particles/StarParticle';
import PurpleCircleParticle from '../particles/PurpleCircleParticle';
import DropdownButton from '../buttons/DropdownButton';
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className='relative bg-primary pt-[140px] bg-opacity-5 pb-24 '>
      <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />

      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className='flex items-center'>
          <div className='relative'>
            <StarParticle className="absolute top-0 right-0" />
            <PurpleCircleParticle className="absolute bottom-0 -left-12" />

           
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
              <br />
              <span className='text-blue-gradient'>Build the skills that lead to success</span> 
              
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray font-sans text-xl"> <br />
           Certificates on Hassania IT academy help you get job-ready for an in-demand career field in less than a year. Earn a career credential, apply your knowledge to hands-on projects that showcase your skills for employers, and get access to job search resources.

              </p>
              
            </div>
            <Link to="/Catalogue">
            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
              {/*  */}
              <PrimaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                Get Started
              </PrimaryButton>
              {/* </Link> */}
             {/*  <DropdownButton name="Download App" className="w-full lg:w-auto">
                <a href="/download/windows" target="_blank" className="w-f ull hover:bg-primary px-6 pt-4 pb-2 block hover:text-white">
                  <FaWindows className='inline mr-2' /> Windows
                </a>
                <a href="/download/linux" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaLinux className='inline mr-2' /> Linux
                </a>
                <a href="/download/android" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaAndroid className='inline mr-2' /> Android
                </a>
                <a href="/download/ios" target="_blank" className="w-full hover:bg-primary px-6 pb-4 pt-2 block hover:text-white">
                  <FaAppStore className='inline mr-2' /> IOS
                </a>
              </DropdownButton>
              */}
            </div>
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <BlueCircleParticle className="absolute top-0 left-11 duration-[5s]" />
          <OrangeCircleParticle className="absolute bottom-1/4 right-0" />
            <img src={globoCrypto} alt="Globe" className=' h-4/5 left-19'/>
        </div>
      </div>
    </section >
  );
}
