import React from 'react';
import Image from 'next/image';
import {
  abstract_left,
  abstract_right,
  arrow,
  ball_left,
  ball_right,
  logo,
} from '@/public/assets';
import { NavLinks } from '@/constants';

export default function Header() {
  return (
    <header className='w-full px-[10px] flex justify-center '>
      <div className='max-w-[1819px] w-full pt-[18px] flex flex-col justify-start items-center'>
        <div className='relative w-full h-[58px] bg-header_bg rounded-[8px] border-[2px] border-solid border-[#262626] flex justify-center items-center overflow-hidden'>
          <div>
            <Image
              src={abstract_left}
              width={0}
              height={0}
              alt={'abstract'}
              className='absolute w-auto h-auto left-0 top-0'
            />
          </div>
          <div>
            <Image
              src={ball_left}
              width={0}
              height={0}
              alt={'abstract'}
              className='absolute w-auto h-auto left-[520px] top-0'
            />
          </div>
          <div>
            <Image
              src={ball_right}
              width={0}
              height={0}
              alt={'abstract'}
              className='absolute w-auto h-auto right-[544px] bottom-0'
            />
          </div>
          <div>
            <Image
              src={abstract_right}
              width={0}
              height={0}
              alt={'abstract'}
              className='absolute w-auto h-auto right-0 top-0'
            />
          </div>
          <div className='flex'>
            <p className=' font-[Outfit] font-medium text-[20px] leading-[30px] text-text_clr '>
              Admission is Open, Grab your seat now
            </p>
            <div>
              <Image
                src={arrow}
                width={0}
                height={0}
                alt={'arrow'}
                className='w-auto h-auto ml-[14px]'
              />
            </div>
          </div>
        </div>
        <div className='w-full h-[80px] mt-[14px]  border-[#262626] border-[2px] border-solid flex justify-between items-center overflow-hidden rounded-[12px]'>
          <div className='w-[230px] h-[80px] flex justify-center items-center bg-[#FF8D4D] border-r-[2px]  border-[#262626]'>
            <Image
              src={logo}
              width={0}
              height={0}
              alt={'Logo'}
              className='w-auto h-auto'
            />
          </div>
          <div>
            <nav className=''>
              <ul className='flex'>
                {NavLinks.map((link, index) => (
                  <li
                    key={link.id}
                    className={`p-[25px] border-[#262626] border-l-[2px] font-[Outfit] font-medium text-[20px] leading-[30px] text-text_clr transition-transform duration-300 hover:bg-[#FFEFE5] ${
                      index === NavLinks.length - 1 ? 'bg-[#FFAE80]  ' : ''
                    } `}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
