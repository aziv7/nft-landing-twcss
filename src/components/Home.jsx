import React from 'react';
import PlayCircle from '../img/PlayCircle.svg';

import NFT from '../img/Group 61.svg';

import NFT1 from '../img/Group 62.svg';

const Home = () => {
  return (
    <div className='py-[150px] flex flex-row'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 text-[#0F1D40] '>
          {' '}
          <p className='text-7xl font-bold '>Explore, Collect</p>
          <p className='text-7xl font-bold'>& Sell Incredible</p>
          <p className='text-7xl font-bold'>NFTs</p>
        </div>
        <div className='text-[#49536E] text-lg'>
          {' '}
          <p>The largest NFT marketplace. Authentic and incredible unique</p>
          <p>digital creations.</p>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <button className='bg-gradient-to-br hover:scale-[0.95] transition-all duration-400 hover:from-[#4E2BC3] hover:via-[#A15EE6] hover:to-[#DBA8DB] hover:drop-shadow-xl ease-in-out font-semibold text-white rounded-2xl   from-[#DBA8DB] via-[#A15EE6] to-[#4E2BC3] py-3 px-3'>
            Get Started
          </button>
          <button className='text-lg  ring-0  text-[#393939]  font-semibold flex items-center gap-2 cursor-pointer rounded-md py-1 px-2  hover:ring-2 hover:ring-[#393939]'>
            <img src={PlayCircle} alt='' />
            <p>Play Video</p>{' '}
          </button>
        </div>
      </div>
      <div className='relative group'>
        <img
          src={NFT}
          alt=''
          className='z-50 transition-all duration-300 group-hover:-rotate-6  w-[475px] max-w-[475px] absolute left-60 -top-16  '
        />
        <img
          src={NFT1}
          alt=''
          className='z-20 transition-all duration-300 group-hover:rotate-6 w-[475px] max-w-[475px] absolute left-60 -top-16  '
        />
      </div>
    </div>
  );
};

export default Home;
