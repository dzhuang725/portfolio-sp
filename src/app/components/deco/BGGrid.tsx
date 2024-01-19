// components/deco/BGGrid.tsx
import React from 'react';
import styles from './BGGrid.module.scss'; // Import the SCSS module

const BGGrid: React.FC = () => {
  return (
    <div className='fixed opacity-20 left-0 top-0 w-full h-full pointer-events-none z-[-1]'>
      <div className="w-full h-full object-cover ">
        <div className="w-full h-full object-cover bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/50  to-zinc-950">
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-zinc-950' />
          <div className={styles.grid}>
            <div className="z-[6] w-full h-[300%] object-cover absolute  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-zinc-950/90 to-zinc-950" />
            <div className={styles.gridLines} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default BGGrid;
