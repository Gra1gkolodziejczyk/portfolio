import { Header } from '@/components/header/header';
import { Accueil } from '@/components/accueil/accueil';
import { About } from '@/components/about/about';
import { Projects } from '@/components/projects/projects';
import { Competences } from '@/components/competences/competences';
import { Contact } from '@/components/contact/contact';

export default function Home() {
  return (
    <>
      <div className='w-full h-screen'>
        <Header />
        <Accueil />
        <About />
        <Competences />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
