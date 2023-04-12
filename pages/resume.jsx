import React from 'react';
import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Murillo | Resumo</title>
        <meta
          name='description'
          content='Sou um estudante de desenvolvimento front-end focado com criar experiências digitais.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resumo</h2>
        <div className='bg-[#263544] my-4 p-4 w-full flex justify-between items-center'>
      
          <div className='flex'>
            <a
              href='https://github.com/murillonunes1'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl text-gray-50 font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'></span> FRONT-END DEV
              <span className='px-1'></span>
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>FRONT-END DEV</p>
            </div>
        </div>
        <p>
        Sou um estudante de desenvolvimento front-end, estou dedicado a aprimorar minhas habilidades em programação para fornecer soluções inovadoras e envolventes para os usuários finais. Estou focado atualmente em desenvolver a parte client-side de websites e aplicações web/mobile, desenvolvendo projetos como freelancer, usando habilidades em linguagens de programação como JavaScript e TypeScript, tendo experiência com os principais frameworks de front-end, como React, Angular e Next. Tenho a capacidade de colaborar com outros desenvolvedores e designers para criar soluções inteligentes e escaláveis e também sou capaz de trabalhar de forma independente e gerenciar meus próprios projetos!
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
      
          <p className='py-2'>
            <span className='px-2'>SKILLS:</span>
            <span className='px-2'></span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Git
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>RESTAPI
          </p>
          
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              <li>
                Habilidades em front-end usando os frameworks necessários; adição e manutenção de interações, criação de páginas web estruturadas e design responsivo;
              </li>
              <li>
                Implementação de recursos que interagem com sistemas de back-end, como integrações de API;
              </li>
              <li>
                Resolução de problemas, trabalho em equipe, autodidata, aprendizado rápido, comunicativo e organizado.
              </li>    
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
          </p>
        </div>

        {/*  */}
    
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
