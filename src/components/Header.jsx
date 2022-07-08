import React from 'react';
import { useState } from 'react';
import logo from '../img/Finite.svg';

import loopicon from '../img/MagnifyingGlass.svg';
const Header = () => {
  const [searchTerm, setSearch] = useState('Search for "crypto punk"');
  return (
    <div className='flex items-center justify-between'>
      <div>
        <img
          className='cursor-pointer hover:scale-110 transition-all duration-150 ease-out'
          src={logo}
        />
      </div>
      <div className='flex items-center gap-12'>
        <div className='ring-1 ring-[#E8E8EA] w-[600px] h-[45px] rounded-lg flex flex-row items-center gap-4'>
          <div>
            <img className=' w-7 h-7 ml-3' src={loopicon} />
          </div>
          <div className='w-full mr-4'>
            {' '}
            <input
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              placeholder='Search for "crypto punk"'
              value={searchTerm}
              className='w-full bg-transparent outline-none text-lg text-[#49536E]'
            />{' '}
          </div>{' '}
        </div>
        <div>
          <ul className='flex flex-row gap-10'>
            <li className='text-[#0F1D40] text-xl font-bold'>Explore</li>
            <li className='text-[#0F1D40] text-xl font-bold'>Create</li>
            <li className='text-[#0F1D40] text-xl font-bold'>Blog</li>
          </ul>
        </div>
        <div>
          <button className='bg-gradient-to-br hover:scale-[0.95] transition-all duration-400 hover:from-[#4E2BC3] hover:via-[#A15EE6] hover:to-[#DBA8DB] hover:drop-shadow-xl ease-in-out font-semibold text-white rounded-2xl   from-[#DBA8DB] via-[#A15EE6] to-[#4E2BC3] py-4 px-5'>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
