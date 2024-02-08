import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1000px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#E6D75C]'>
          Contato
        </p>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* esquerda */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-[#E6D75C]'>Murillo Dev</h2>
                <MdEmail />
                <p>murillonuness@outlook.com</p>
              </div>
              <div>
                <div className='flex items-center justify py-6 text-[#E6D75C]'>
                  <a
                    href='https://www.linkedin.com/in/murillonunesdev/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#E6D75C] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://wa.me/5534991571397'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#E6D75C] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaWhatsapp />
                    </div>

                    </a>
              
                </div>
              </div>
            </div>
          </div>

          {/* direita */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/f147fb29-ce33-4aa0-90a9-e92d9bd89abe'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-gray-50'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-gray-50'>
                      Número de telefone
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-gray-50'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-gray-50'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-gray-50'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-50 mt-4'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#38376b]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
