// pages/index.tsx
import React from 'react';
import Card from './ui/ExperienceCard';
import data from '../data/experiences.json'; // Adjust the path to your JSON file
import { Experience } from '../types';

const Experiences: React.FC = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {data.map((item: Experience) => (
        <div data-aos="fade-up" key={item.id} className={item.id === 1 ? 'sm:col-span-2' : 'col-span-1'}>
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default Experiences;
