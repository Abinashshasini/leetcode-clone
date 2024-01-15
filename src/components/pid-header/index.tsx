/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { ImNewTab } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import classes from './style.module.scss';

const PidHeader = () => {
  return (
    <div className={classes.container}>
      {/* left section code */}
      <div className={classes.leftWraper}>
        <img src="/assets/logo.png" alt="pid_page_logo" />
        <span className={classes.divider} />
        <div className={classes.problemFeatures}>
          <div className={classes.dailyQuestions}>
            <Image
              src="/assets/problem.svg"
              alt="icon"
              width={13}
              height={13}
            />
            <p>Daily Questions</p>
            <ImNewTab className={classes.tabIcon} />
          </div>
          <span className={classes.blackDivider} />
          <div className={classes.arrowIon}>
            <IoIosArrowBack />
          </div>
          <span className={classes.blackDivider} />
          <div className={classes.arrowIon}>
            <IoIosArrowForward />
          </div>
          <span className={classes.blackDivider} />
          <div className={classes.arrowIon}>
            <Image src="/assets/repeat.svg" alt="icon" width={14} height={14} />
          </div>
        </div>
      </div>

      {/* center section code */}
      <div className={classes.cnterWraper}>center</div>

      {/* right section code */}
      <div className={classes.rightWraper}>right</div>
    </div>
  );
};

export default PidHeader;
