import { FloatingBubble } from '@/components/competences/floating-bubble';
import { Skill } from '@/types/skill.type';
import ReactImage from '@/public/react.svg';
import TailwindCss from '@/public/tailwindcss.svg';
import Dart from '@/public/dart.svg';
import NestJs from '@/public/nestjs.svg';
import Prisma from '@/public/prisma.svg';
import Nuxtjs from '@/public/nuxtjs.svg';
import Graphql from '@/public/graphql.svg';
import Pinia from '@/public/pinia.svg';
import AWS from '@/public/aws.svg';
import Flutter from '@/public/flutter.svg';
import Php from '@/public/php.svg';
import Express from '@/public/express.svg';
import Nodejs from '@/public/nodejs.svg';
import Github from '@/public/github.svg';
import Gitlab from '@/public/gitlab.svg';
import Homebrew from '@/public/homebrew.svg';
import Intellij from '@/public/intellijidea.svg';
import Java from '@/public/java.svg';
import Jest from '@/public/jest.svg';
import Laravel from '@/public/laravel.svg';
import Linear from '@/public/linear.svg';
import Motion from '@/public/motion.svg';
import Postgres from '@/public/postgres.svg';
import Nextjs from '@/public/nextjs.svg';
import RestApi from '@/public/rest-api.svg';
import Stripe from '@/public/stripe.svg';
import ShadcnUi from '@/public/schadcnui.svg';
import Typescript from '@/public/typescript.svg';
import Zod from '@/public/zod.svg';

const MIN_SIZE = 85;
const MAX_SIZE = 120;
const SIZE_STEP = (MAX_SIZE - MIN_SIZE) / 30; // Pour créer une distribution uniforme

const skills: Skill[] = [
  {
    name: 'React',
    icon: ReactImage,
    size: MIN_SIZE + SIZE_STEP * 0,
  },
  {
    name: 'Tailwind',
    icon: TailwindCss,
    size: MIN_SIZE + SIZE_STEP * 1,
  },
  {
    name: 'Dart',
    icon: Dart,
    size: MIN_SIZE + SIZE_STEP * 2,
  },
  {
    name: 'NestJS',
    icon: NestJs,
    size: MIN_SIZE + SIZE_STEP * 3,
  },
  {
    name: 'Prisma',
    icon: Prisma,
    size: MIN_SIZE + SIZE_STEP * 4,
  },
  {
    name: 'Nuxt.js',
    icon: Nuxtjs,
    size: MIN_SIZE + SIZE_STEP * 5,
  },
  {
    name: 'GraphQL',
    icon: Graphql,
    size: MIN_SIZE + SIZE_STEP * 6,
  },
  {
    name: 'Pinia',
    icon: Pinia,
    size: MIN_SIZE + SIZE_STEP * 7,
  },
  {
    name: 'Aws',
    icon: AWS,
    size: MIN_SIZE + SIZE_STEP * 8,
  },
  {
    name: 'Flutter',
    icon: Flutter,
    size: MIN_SIZE + SIZE_STEP * 9,
  },
  {
    name: 'Php',
    icon: Php,
    size: MIN_SIZE + SIZE_STEP * 10,
  },
  {
    name: 'express',
    icon: Express,
    size: MIN_SIZE + SIZE_STEP * 11,
  },
  {
    name: 'Nodejs',
    icon: Nodejs,
    size: MIN_SIZE + SIZE_STEP * 12,
  },
  {
    name: 'Github',
    icon: Github,
    size: MIN_SIZE + SIZE_STEP * 13,
  },
  {
    name: 'Gitlab',
    icon: Gitlab,
    size: MIN_SIZE + SIZE_STEP * 14,
  },
  {
    name: 'Homebrew',
    icon: Homebrew,
    size: MIN_SIZE + SIZE_STEP * 15,
  },
  {
    name: 'IntelliJ',
    icon: Intellij,
    size: MIN_SIZE + SIZE_STEP * 16,
  },
  {
    name: 'Java',
    icon: Java,
    size: MIN_SIZE + SIZE_STEP * 17,
  },
  {
    name: 'Jest',
    icon: Jest,
    size: MIN_SIZE + SIZE_STEP * 18,
  },
  {
    name: 'Laravel',
    icon: Laravel,
    size: MIN_SIZE + SIZE_STEP * 19,
  },
  {
    name: 'Linear',
    icon: Linear,
    size: MIN_SIZE + SIZE_STEP * 20,
  },
  {
    name: 'Motion',
    icon: Motion,
    size: MIN_SIZE + SIZE_STEP * 21,
  },
  {
    name: 'Nextjs',
    icon: Nextjs,
    size: MIN_SIZE + SIZE_STEP * 22,
  },
  {
    name: 'Postgres',
    icon: Postgres,
    size: MIN_SIZE + SIZE_STEP * 23,
  },
  {
    name: 'Rest-Api',
    icon: RestApi,
    size: MIN_SIZE + SIZE_STEP * 24,
  },
  {
    name: 'ShadcnUi',
    icon: ShadcnUi,
    size: MIN_SIZE + SIZE_STEP * 25,
  },
  {
    name: 'Stripe',
    icon: Stripe,
    size: MIN_SIZE + SIZE_STEP * 26,
  },
  {
    name: 'Typescript',
    icon: Typescript,
    size: MIN_SIZE + SIZE_STEP * 27,
  },
  {
    name: 'Zod',
    icon: Zod,
    size: MIN_SIZE + SIZE_STEP * 28,
  },
];

export function BubbleSection() {
  return (
    <div className='relative min-w-screen min-h-screen'>
      {skills.map((skill, index) => (
        <FloatingBubble key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
}
