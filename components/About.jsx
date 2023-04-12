import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[900px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-4 text-gray-50'>
          Sou um estudante de desenvolvimento Front-end com habilidades em JavaScript, Node.js, Next.js, React, HTML5 e CSS3.  Estou dedicado a aprimorar minhas habilidades em programação para fornecer soluções inovadoras e envolventes para os usuários finais. Além de minhas habilidades em programação, sou uma pessoa orientada a resultados e trabalho bem em equipe. Tenho a capacidade de colaborar com outros desenvolvedores e designers para criar soluções inteligentes e escaláveis e também sou capaz de trabalhar de forma independente e gerenciar meus próprios projetos.
          </p>
          <p className='py-4 text-gray-50'>
          I am a Front-end development student with skills in JavaScript, Node.js, Next.js React, HTML5 and CSS3. I'm dedicated to improving my programming skills to provide innovative solutions for end users. In addition to my programming skills, I am a results-oriented person and work well in a team. I have the ability to collaborate with other developers and designers to create smart solutions, and I'm also able to work independently and manage my own projects.
          </p>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
