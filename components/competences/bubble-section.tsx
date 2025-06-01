import { FloatingBubble } from "@/components/competences/floating-bubble";
import { Skill } from "@/types/skill.type";
import ReactImage from "@/public/react.svg";
import TailwindCss from "@/public/tailwindcss.svg";
import Dart from "@/public/dart.svg";
import NestJs from "@/public/nestjs.svg";
import Prisma from "@/public/prisma.svg";
import Nuxtjs from "@/public/nuxtjs.svg";
import Graphql from "@/public/graphql.svg";
import Pinia from "@/public/pinia.svg";
import AWS from "@/public/aws.svg";
import Flutter from "@/public/flutter.svg";
import Php from "@/public/php.svg";
import Express from "@/public/express.svg";
import Nodejs from "@/public/nodejs.svg";
import Github from "@/public/github.svg";
import Gitlab from "@/public/gitlab.svg";
import Homebrew from "@/public/homebrew.svg";
import IntelliJ from "@/public/intellij.svg";
import Java from "@/public/java.svg";
import Jest from "@/public/jest.svg";
import Laravel from "@/public/laravel.svg";
import Linear from "@/public/linear.svg";
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

const skills: Skill[] = [
  { name: 'React', icon: ReactImage, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Tailwind', icon: TailwindCss, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Dart', icon: Dart, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'NestJS', icon: NestJs, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Prisma', icon: Prisma, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Nuxt.js', icon: Nuxtjs, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'GraphQL', icon: Graphql, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Pinia', icon: Pinia, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Aws', icon: AWS, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Flutter', icon: Flutter, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Php', icon: Php, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'express', icon: Express, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Nodejs', icon: Nodejs, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Github', icon: Github, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Gitlab', icon: Gitlab, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Homebrew', icon: Homebrew, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'IntelliJ', icon: IntelliJ, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Java', icon: Java, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Jest', icon: Jest, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Laravel', icon: Laravel, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Linear', icon: Linear, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Motion', icon: Motion, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Nextjs', icon: Nextjs, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Postgres', icon: Postgres, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Rest-Api', icon: RestApi, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'ShadcnUi', icon: ShadcnUi, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Stripe', icon: Stripe, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Typescript', icon: Typescript, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
  { name: 'Zod', icon: Zod, size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE},
];
export function BubbleSection() {
  return (
    <div className="relative min-w-screen min-h-screen">
      {skills.map((skill) => (
        <FloatingBubble key={skill.name} skill={skill} />
      ))}
    </div>
  )
}
