import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import classes from './style.module.scss';

const QuestionCard = () => {
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
        <IoCheckmarkCircleOutline color="#2cbb5d" />
        {/* <CiBookmark color="#f8f8fd" /> */}
      </div>
      <div className={`${classes.title}`}>931 . Minimum Falling Path Sum</div>
      <div
        className={`${classes.title}`}
        style={{
          color: `${
            handleGenerateRandomNumber() ? 'rgb(175 82 222)' : '#1890ff'
          }`,
        }}
      >
        <HiOutlineDocumentText />
      </div>
      <div className={`${classes.title} ml-6`}>64.7%</div>
      <div className={`${classes.title} ml-6`} data-difficulty="medium">
        Medium
      </div>
      <div className={`${classes.title} ml-6`}>Array</div>
    </div>
  );
};

export default QuestionCard;
