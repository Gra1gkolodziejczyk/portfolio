'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Intellij from '@/public/intellij.svg';
import Valise from '@/public/valise.png';
import Link from 'next/link';
import Linkedin from '@/public/linkedin.svg';
import Bitcoin from '@/public/bitcoin.svg';
import Pepper from '@/public/pepper.png';

export function AboutSection() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-3xl sm:text-5xl font-bold text-primary mb-8'
      >
        À propos de moi
      </motion.h2>

      <div className='grid gap-6'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex items-start gap-4'
        >
          <Image src={Intellij} alt='' height={35} width={35} />
          <div>
            <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>
              Passionné de Développement
            </h3>
            <p className='text-muted-foreground'>
              Je suis un développeur passionné par les nouvelles technologies et
              l&apos;innovation. Mon enthousiasme pour le code me pousse à
              constamment explorer et apprendre de nouvelles choses.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex items-start gap-4'
        >
          <Image src={Valise} alt='' height={35} width={35} />
          <div>
            <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>
              Freelance & Entrepreneur
            </h3>
            <p className='text-muted-foreground'>
              Je mène une double vie professionnelle en tant que freelance et
              entrepreneur, toujours à la recherche de nouveaux défis et
              opportunités. Plusieurs projets à mon actif ! (voir{' '}
              <Link href='#projets' className='not-active:text-primary'>
                mes projets
              </Link>
              )
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex items-start gap-4'
        >
          <Image src={Linkedin} alt='' height={35} width={35} />
          <div>
            <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>
              En Recherche Active
            </h3>
            <p className='text-muted-foreground'>
              Actuellement à la fin de mes études en master 2 expert en
              développement logiciel, je recherche un CDI pour démarrer une
              nouvelle aventure professionnelle et mettre à profit mes
              compétences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex items-start gap-4'
        >
          <Image src={Bitcoin} alt='' height={35} width={35} />
          <div>
            <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>
              Trader Passionné
            </h3>
            <p className='text-muted-foreground'>
              Depuis 2020, j&apos;investis dans le Bitcoin et je trade le Forex
              (EUR-USD / Gold), alliant analyse technique et gestion des
              risques.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className='flex items-start gap-4'
        >
          <Image src={Pepper} alt='' height={35} width={35} />
          <div>
            <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>
              Amateur de Cuisine Épicée
            </h3>
            <p className='text-muted-foreground'>
              Grand amateur de cuisine épicée, j&apos;aime découvrir de
              nouvelles saveurs et expérimenter avec différents styles
              culinaires.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
