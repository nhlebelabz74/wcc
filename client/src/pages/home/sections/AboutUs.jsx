import React from 'react';
import { lazy, Suspense } from 'react';

// Import images
import bainHoodie1 from '@/assets/images/bainHoodie1.webp';
import bainHoodie4 from '@/assets/images/bainHoodie4.webp';
import bainHoodie5 from '@/assets/images/bainHoodie5.webp';
import exec_group from '@/assets/exec/exec-group-photo.webp';

const AboutUs = () => {
  return (
    <section className='relative w-full h-[200vh] max-lg:h-[265vh] max-md:h-[310vh] p-10'>
      <div className='mx-auto max-w-7xl grid grid-cols-8 max-lg:grid-cols-6 gap-5 mt-20'>
        <div className='flex items-center max-lg:col-span-6 col-span-4 max-lg:row-span-17 row-span-25 rounded-2xl max-lg:order-0'>
          <div className='flex flex-col gap-4 p-10'>
            <h1 className='text-4xl font-bold '>
              About Us
            </h1>
            <p className='text-lg leading-relaxed'>
              <span className='font-bold text-ring text-lg'>The Wits Consulting Club (WCC)</span> is the premier student-led consulting 
              organization at the University of the Witwatersrand. <span className='font-bold'>Our mission</span> is to equip 
              students with the skills, knowledge, and network needed to excel in the world 
              of consulting. Through industry collaborations, hands-on case practice, and 
              professional development initiatives, we prepare future consultants to 
              navigate complex business challenges with confidence. Whether you are new 
              to consulting or looking to refine your expertise, WCC provides the platform 
              to grow, connect, and lead.
            </p>
          </div>
        </div>
        <div className='col-span-4 row-span-25 bg-primary rounded-2xl max-lg:order-2'>
          <img 
            src={exec_group}
            alt='Executive Group Photo'
            className='w-full h-full object-cover rounded-2xl'
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className='col-span-2 row-span-25 rounded-2xl relative max-lg:order-1'>
          <img 
            src={bainHoodie5}
            alt='Bain Hoodie'
            className='absolute w-full max-lg:h-3/5 h-1/2 object-cover rounded-2xl bottom-0 left-0 right-0'
            loading="lazy"
          />
        </div>
        <div className='col-span-4 row-span-25 rounded-2xl max-lg:order-3'>
          <img 
            src={bainHoodie1}
            alt='Bain Hoodie'
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />
        </div>
        <div className='col-span-2 row-span-25 rounded-2xl relative max-lg:order-4'>
          <img 
            src={bainHoodie4}
            alt='Bain Hoodie'
            className='absolute w-full max-lg:h-3/5 h-1/2 object-cover rounded-2xl top-0 left-0 right-0'
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;