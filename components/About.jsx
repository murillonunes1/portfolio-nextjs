import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[900px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-4 text-gray-50'>
          Sou um desenvolvedor Front-end com habilidades em JavaScript, TypeScript React, Angular, Node.js, Next.js, HTML5 e CSS3. Estou dedicado a resolver problemas usando tecnologia e a criação de sites e aplicações web visualmente atraentes e intuitivas. Tenho a capacidade de colaborar com outros desenvolvedores e designers para criar soluções inteligentes e escaláveis e também sou capaz de trabalhar de forma independente e gerenciar meus próprios projetos.
          </p>
          <p className='py-4 text-gray-50'>
          I am a Front-end developer with skills in JavaScript, TypeScript, React, Angular, Node.js, Next.js, HTML5 e CSS3. I'm dedicated to solving problems using technology and creating visually appealing and intuitive websites and web applications. I have the ability to collaborate with other developers and designers to create smart solutions and I'm also able to work independently and manage my own projects.
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
