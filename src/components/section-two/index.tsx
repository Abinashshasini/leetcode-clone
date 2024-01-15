import React, { FC } from 'react';
import Image from 'next/image';
import classes from './style.module.scss';

type TStudyPlan = {
  id: number;
  heading: string;
  description: string;
  img: string;
};

const studyPlanMaterials = [
  {
    id: 1,
    heading: 'Top Interview 150',
    description: 'Must-do List for Interview Prep',
    img: '/assets/sec_two_img1.png',
  },
  {
    id: 2,
    heading: 'LeetCode 75',
    description: 'Ace Coding Interview with 75 Qs',
    img: '/assets/sec_two_img2.png',
  },
  {
    id: 3,
    heading: 'SQL 50',
    description: 'Crack SQL Interview in 50 Qs',
    img: '/assets/sec_two_img3.png',
  },
  {
    id: 4,
    heading: 'Introduction to Pandas',
    description: 'Learn Basic Pandas in 15 Qs',
    img: '/assets/sec_two_img4.png',
  },
  {
    id: 5,
    heading: '30 Days of JavaScript',
    description: 'Learn JS Basics with 30 Qs',
    img: '/assets/sec_two_img5.png',
  },
  {
    id: 6,
    heading: 'Amazon Spring 23 High Frequency',
    description: 'Practice Amazon 25 Recently Asked Qs',
    img: '/assets/sec_two_img6.png',
  },
];

const SectionTwo: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Study Plan</h2>
        <p>See all</p>
      </div>
      <div className={classes.studyPlanContainer}>
        {studyPlanMaterials.map((element: TStudyPlan) => (
          <div key={element.id} className={classes.studyPlanWraper}>
            <Image
              src={element.img}
              alt={element.heading}
              width={100}
              height={100}
            />
            <div className={classes.textContainer}>
              <h2>{element.heading}</h2>
              <p>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
