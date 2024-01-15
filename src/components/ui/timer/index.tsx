'use client';
import React, { FC, useEffect, useState } from 'react';
import { LuAlarmClock } from 'react-icons/lu';
import { CgSandClock } from 'react-icons/cg';
import { GrPowerReset } from 'react-icons/gr';
import { FaPlay, FaPause } from 'react-icons/fa';
import classes from './style.module.scss';

const Timer: FC = () => {
  /** Required states */
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);

  /** Function to start timer */
  const handelStartTimer = () => {
    setShowTimer(true);
  };

  /** Function to toggle timer */
  const handleToggleTimer = (state: string) => {
    if (state === 'play') {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  /** Function to reset tiimer */
  const handleReset = () => {
    setTime(0);
    setPlay(false);
    setShowTimer(false);
  };

  /** Function to formate time */
  const handleFormateTime = (_time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  /** Effect to start the cound down and clear interval on retun */
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (showTimer && play) {
      interval = setInterval(() => {
        setTime((prev: number) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showTimer, play]);

  if (!showTimer) {
    return (
      <button className={classes.clock} onClick={handelStartTimer}>
        <LuAlarmClock />
      </button>
    );
  } else {
    return (
      <div className={classes.timer}>
        <div className={classes.sandClockIcon} data-play={play}>
          <CgSandClock />
        </div>
        <p>{handleFormateTime(time)}</p>
        <div>
          {play ? (
            <FaPause
              className={classes.iconSmall}
              onClick={() => handleToggleTimer('pause')}
            />
          ) : (
            <FaPlay
              className={classes.iconSmall}
              onClick={() => handleToggleTimer('play')}
            />
          )}
        </div>
        <GrPowerReset className={classes.iconSmall} onClick={handleReset} />
      </div>
    );
  }
};

export default Timer;
