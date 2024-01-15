/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { ImNewTab } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaUser, FaBug, FaPlay, FaCloudUploadAlt } from 'react-icons/fa';
import { FaNoteSticky } from 'react-icons/fa6';
import { AiOutlineFire } from 'react-icons/ai';
import classes from './style.module.scss';
import Timer from '../ui/timer/index';

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
              width={15}
              height={15}
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
      <div className={classes.cnterWraper}>
        <div className="flex items-center justify-center">
          <div className={classes.iconCnt}>
            <FaBug color="#fea116" />
          </div>
          <span className={classes.blackDivider} />
          <div className={classes.iconCnt} style={{ borderRadius: '0px' }}>
            <FaPlay />
            <p>Run</p>
          </div>
          <span className={classes.blackDivider} />
          <div className={`${classes.iconCnt} ${classes.noLeftborder}`}>
            <FaCloudUploadAlt color="#28c244" />
            <p style={{ color: '#28c244' }}>Submit</p>
          </div>
        </div>

        <Timer />
        <div className={classes.iconCnt}>
          <FaNoteSticky />
        </div>
      </div>

      {/* right section code */}
      <div className={classes.rightWraper}>
        <div className={classes.iconsWaper}>
          <Image src="/assets/menu.svg" alt="icon" width={15} height={15} />
        </div>
        <div className={classes.iconsWaper}>
          <IoSettingsOutline />
        </div>
        <div className={classes.iconsWaper}>
          <AiOutlineFire />
          <span>&nbsp;0</span>
        </div>
        <div className={classes.iconsWaper}>
          <FaUser />
        </div>
        <div className={classes.premium}>Premium</div>
      </div>
    </div>
  );
};

export default PidHeader;
