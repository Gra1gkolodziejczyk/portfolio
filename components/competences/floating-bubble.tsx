'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '@/types/skill.type';

const getInitialPosition = (index: number) => {
  const row = Math.floor(index / 5);
  const col = index % 5;
  return {
    x: 15 + (col * 70) / 5,
    y: 15 + (row * 70) / 5,
  };
};

export function FloatingBubble({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const [mounted, setMounted] = useState(false);
  const position = getInitialPosition(index);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [position.x + '%', position.x + 2 + '%', position.x + '%'],
        y: [position.y + '%', position.y + 2 + '%', position.y + '%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className='absolute'
      style={{
        left: 0,
        top: 0,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className='relative'
      >
        <div
          className='relative rounded-full bg-background/10 backdrop-blur-sm shadow-lg hover:shadow-xl p-6 border border-primary/20 dark:bg-background/50'
          style={{
            width: `${skill.size}px`,
            height: `${skill.size}px`,
          }}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            className='p-4 object-contain'
          />
        </div>
        <p className='mt-2 font-medium text-center text-sm text-foreground'>
          {skill.name}
        </p>
      </motion.div>
    </motion.div>
  );
}
