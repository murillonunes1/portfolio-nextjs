import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cowebImg from '../public/assets/projects/coweb.png';
import businessImg from '../public/assets/projects/business.png'
import autocenterImg from '../public/assets/projects/autocenter.png'
import designxImg from '../public/assets/projects/designx.png'
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
            title='Caratta Oliva Website'
            backgroundImg={cowebImg}
            projectUrl='/coweb'
          />
          <ProjectItem
            title='Business Website'
            backgroundImg={businessImg}
            projectUrl='/business'

          />
          <ProjectItem
            title='AutoCenter Website'
            backgroundImg={autocenterImg}
            projectUrl='/autocenter'

          />
          <ProjectItem
            title='DesignX Website'
            backgroundImg={designxImg}
            projectUrl='/designx'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
