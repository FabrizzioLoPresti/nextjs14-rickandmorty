'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const Loader = (props: Props) => {
  const scale = 1.2; // Set the scale factor
  const duration = 1.5; // Set the animation duration in seconds

  return (
    <div className="max-w-full overflow-hidden min-h-screen h-full">
      <motion.div
        className="flex items-center justify-center"
        animate={{
          scale: [1, scale, 1], // Animate to scale factor, then back to 1
          transition: {
            duration, // Set the animation duration
            repeat: Infinity, // Repeat the animation infinitely
            ease: 'easeInOut', // Set the animation easing
          },
        }}
      >
        <Image src="/loader.png" alt="Loading..." width={640} height={640} />
      </motion.div>
    </div>
  );
};

export default Loader;
