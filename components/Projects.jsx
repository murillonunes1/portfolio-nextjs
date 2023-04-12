import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import netflixImg from '../public/assets/projects/netflix.png'
import twitchImg from '../public/assets/projects/twitch.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[900px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#fff]'>
          Projetos
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Website comercial'
            backgroundImg={propertyImg}
            projectUrl='/coweb'
            tech='React JS'
          />
          <ProjectItem
            title='App RentACar'
            backgroundImg={cryptoImg}
            projectUrl='/rentacar'
            tech='React JS'

          />
          <ProjectItem
            title='Página de e-commerce'
            backgroundImg={netflixImg}
            projectUrl='/ecommerce'
            tech='Next JS'

          />
          <ProjectItem
            title='Plataforma de stream'
            backgroundImg={twitchImg}
            projectUrl='/stream'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
