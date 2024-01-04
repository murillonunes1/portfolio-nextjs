import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[950px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
    
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#E6D75C]'> Murillo Dev</span>
          </h1>
          <h2 className='py-2 text-gray-50'> Espero que você tenha uma ótima experiência visitando meu website!</h2>
          <p className='py-4 text-gray-50 sm:max-w-[70%] m-auto'>
          Estudante dedicado ao desenvolvimento Front-end com habilidades em JavaScript, Node.js, Next.js, Git, React, HTML5, CSS3 e Tailwind.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/murillo-nunes-476564262/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/murillonunes1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href="https://wa.me/5534991571397">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaWhatsapp />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
