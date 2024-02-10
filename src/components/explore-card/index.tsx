import React, { FC } from 'react';
import { FaPlay } from 'react-icons/fa';
import classes from './style.module.scss';

type Tprops = {
  index: string;
};

const ExploreCard: FC<Tprops> = ({ index }) => {
  return (
    <div className={classes.container} data-index={index}>
      <div className={classes.topCnt}>
        <div className={classes.rightCnt}>
          <div className={classes.rightCntBar}>
            <p style={{ width: '40%' }}></p>
            <p style={{ width: '20%' }}></p>
          </div>
          <div className={classes.rightCntBox}>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className={classes.playCnt}>
          <FaPlay color="#e6eaef" />
        </div>
      </div>
      <div className="flex items-center pl-4" style={{ height: '90px' }}>
        <div className={classes.bottomCntBar}></div>
      </div>
    </div>
  );
};

export default ExploreCard;
