import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cowebImg from '../public/assets/projects/coweb.png';
import businessImg from '../public/assets/projects/business.png'
import autocenterImg from '../public/assets/projects/autocenter.png'
import designXImg from '../public/assets/projects/designx.png'
import innohubImg from '../public/assets/projects/innohub.png'
import pagpageImg from '../public/assets/projects/pagpage.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[900px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#E6D75C]'>
          Projetos
        </p>
        <h2 className='py-4'>What I&apos;ve built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Innohub'
            backgroundImg={innohubImg}
            projectUrl='/innohub'

          />  
          <ProjectItem
            title='Business Website'
            backgroundImg={businessImg}
            projectUrl='/rentacar'

          />
          <ProjectItem
            title='AutoCenter Website'
            backgroundImg={autocenterImg}
            projectUrl='/ecommerce'

          />
          <ProjectItem
            title='Página de Pagamento'
            backgroundImg={designXImg}
            projectUrl='/pagpage'

          />
          <ProjectItem
            title='Caratta Oliva Website'
            backgroundImg={cowebImg}
            projectUrl='/coweb'
          />
        <ProjectItem
            title='Página de Pagamento'
            backgroundImg={pagpageImg}
            projectUrl='/stream'
          />  
        </div>
      </div>
    </div>
  );
};

export default Projects;
