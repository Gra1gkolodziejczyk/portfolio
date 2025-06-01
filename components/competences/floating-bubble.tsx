'use client';

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/types/skill.type";

export function FloatingBubble({ skill }: { skill: Skill }) {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth * 0.8,
    y: Math.random() * window.innerHeight * 0.8,
  });

  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 4,
    y: (Math.random() - 0.5) * 4,
  });

  const springConfig = {
    damping: 10,
    stiffness: 100,
    mass: 1,
  };

  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(prev => {
        const newX = prev.x + velocity.x;
        const newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Collision avec les bords
        if (newX <= 0 || newX >= window.innerWidth * 0.8) {
          newVelX = -velocity.x;
        }
        if (newY <= 0 || newY >= window.innerHeight * 0.8) {
          newVelY = -velocity.y;
        }

        setVelocity({ x: newVelX, y: newVelY });

        return {
          x: newX,
          y: newY,
        };
      });
    };

    const intervalId = setInterval(updatePosition, 50);
    return () => clearInterval(intervalId);
  }, [velocity]);

  useEffect(() => {
    springX.set(position.x);
    springY.set(position.y);
  }, [position, springX, springY]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        x: springX,
        y: springY,
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 }
      }}
    >
      <div className={`
        relative rounded-full 
        bg-white/10 backdrop-blur-sm
        shadow-lg hover:shadow-xl
        p-6 transition-all duration-300
        border border-primary/20
        dark:bg-slate-800/50
      `}
           style={{
             width: `${skill.size}px`,
             height: `${skill.size}px`,
           }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          layout="fill"
          className="p-4 object-contain"
        />
      </div>
      <p className="mt-2 font-medium text-center text-sm">
        {skill.name}
      </p>
    </motion.div>
  );
};
