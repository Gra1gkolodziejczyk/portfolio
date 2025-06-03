'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Me from '@/public/moi.png';
import ReactImage from '@/public/react.svg';
import TailwindCss from '@/public/tailwindcss.svg';
import Dart from '@/public/dart.svg';
import NestJs from '@/public/nestjs.svg';
import Prisma from '@/public/prisma.svg';
import PrismaLight from '@/public/prisma_dark.svg';
import Nuxtjs from '@/public/nuxtjs.svg';
import Graphql from '@/public/graphql.svg';

export function AccueilSection() {
  return (
    <div className='flex flex-row h-full w-full items-center justify-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-lg text-black dark:text-white'
        >
          Bonjour, je m&apos;appelle
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl sm:text-7xl font-extrabold text-primary'
        >
          Graig KOLODZIEJCZYK
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-4xl sm:text-7xl font-extrabold text-black dark:text-white'
        >
          Je suis développeur Full-Stack Web et Mobile.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-4 text-lg text-black dark:text-white'
        >
          Je construis des applications complètes et responsives, mobiles ou
          web. Rien ne m&apos;arrête, je suis un entrepreneur dans l&apos;âme et
          autodidacte depuis toujours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex flex-row gap-4 mt-4'
        >
          <p className='font-bold text-lg sm:pt-1'>Stack technique :</p>
          <div className='flex flex-row items-center justify-center text-center gap-2'>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 1,
                ease: 'easeInOut',
              }}
            >
              <Image src={ReactImage} alt='image' height={35} width={35} />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 1.7,
                ease: 'easeInOut',
              }}
            >
              <Image src={TailwindCss} alt='image' height={35} width={35} />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 2.4,
                ease: 'easeInOut',
              }}
            >
              <Image src={Dart} alt='image' height={30} width={30} />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 3,
                ease: 'easeInOut',
              }}
            >
              <Image src={Nuxtjs} alt='image' height={35} width={35} />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 3.7,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={Prisma}
                alt='image'
                height={25}
                width={25}
                className='block dark:hidden'
              />
              <Image
                src={PrismaLight}
                alt='image'
                height={25}
                width={25}
                className='hidden dark:block'
              />
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 4.4,
                ease: 'easeInOut',
              }}
            >
              <Image src={Graphql} alt='image' height={30} width={30} />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, 0] }}
              transition={{
                duration: 0.7,
                delay: 5.1,
                ease: 'easeInOut',
              }}
            >
              <Image src={NestJs} alt='image' height={35} width={35} />
            </motion.div>
            <p className='font-bold flex items-center justify-center text-black dark:text-white'>
              ... et plus encore
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex gap-4 mt-4'
        >
          <Link
            href='#contact'
            className='px-6 py-3 text-sm font-medium text-white transition-colors bg-primary rounded-md hover:bg-primary/90'
          >
            Me contacter
          </Link>
          <Link
            href='#projets'
            className='px-6 py-3 text-sm font-medium transition-colors border rounded-md text-foreground hover:bg-accent'
          >
            Voir mes projets
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, 0] }}
        transition={{
          duration: 3,
          times: [0.3, 0.6, 1],
          ease: 'easeInOut',
        }}
        className='max-w-[1200px] flex justify-center items-center content-center text-center'
      >
        <Image
          src={Me}
          alt='avatar'
          className='h-56 object-cover rounded-full w-96 border-8 border-primary p-2 dark:border-primary max-xl:hidden'
        />
      </motion.div>
    </div>
  );
}
