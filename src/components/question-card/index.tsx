import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import Link from 'next/link';
import { CiBookmark } from 'react-icons/ci';
import { DBProblem } from '@/utils/types/problem';
import classes from './style.module.scss';

const QuestionCard = ({ problemData }: { problemData: DBProblem }) => {
  /** Function to generate a random number */
  const handleGenerateRandomNumber = () => {
    const num = Math.floor(Math.random() * 10);
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.status}>
        {problemData.status ? (
          <IoCheckmarkCircleOutline color="#2cbb5d" />
        ) : (
          <CiBookmark color="#f8f8fd" />
        )}
      </div>
      <Link href={`problems/${problemData.id}`} className={`${classes.title}`}>
        {problemData.title}
      </Link>
      <a
        className={`${classes.title}`}
        style={{
          color: `${
            handleGenerateRandomNumber() ? 'rgb(175 82 222)' : '#1890ff'
          }`,
        }}
        href={problemData.solutions}
      >
        <HiOutlineDocumentText />
      </a>
      <div className={`${classes.title} ml-6`}>{problemData.acceptance}</div>
      <div
        className={`${classes.title} ml-6`}
        data-difficulty={problemData.difficulty}
      >
        {problemData.difficulty}
      </div>
      <div className={`${classes.title} ml-6`}>{problemData.category}</div>
    </div>
  );
};

export default QuestionCard;
