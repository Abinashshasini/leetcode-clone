/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classes from './style.module.scss';

const SectionOne = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgCnt}>
        <img src="/assets/home_img_three.jpeg" alt="section_one_images" />
      </div>
      <div className={classes.imgCnt}>
        <img src="/assets/home_img_two.png" alt="section_two_images" />
      </div>
      <div className={classes.imgCnt}>
        <img src="/assets/home_img_one.png" alt="section_three_images" />
      </div>
      <div className={classes.imgCnt}>
        <img src="/assets/home_img_two.png" alt="section_two_images" />
      </div>
    </div>
  );
};

export default SectionOne;
