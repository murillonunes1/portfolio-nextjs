import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Murillo Dev</title>
        <meta name="Estudante dedicado ao desenvolvimento Front-end com habilidades em JavaScript (ES6), Node.js, React, Next, HTML5 e CSS3" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
