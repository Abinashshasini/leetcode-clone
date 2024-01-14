'use client';
import { FC } from 'react';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TbLogout } from 'react-icons/tb';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiListCheck2 } from 'react-icons/ri';
import { auth } from '@/firebase/firebase';
import LogoutButton from '../logout-button/index';
import classes from './style.module.scss';
import Timer from '../ui/timer/index';

type THeaderProps = {
  onClickSignIn?: () => void;
  isBackgroundPresent?: boolean;
  isPidPage?: boolean;
};

const Header: FC<THeaderProps> = ({
  onClickSignIn,
  isBackgroundPresent = false,
  isPidPage = false,
}) => {
  /** Firebase hook to check if the user is already logged in or not */
  const [user] = useAuthState(auth);

  return (
    <div
      className={classes.container}
      data-isBackgroundPresent={isBackgroundPresent}
      data-isPidPage={isPidPage}
    >
      <div className={classes.logo}>
        <Image src="/assets/logo.png" width={100} height={100} alt="logo" />
        <h1>Leetcode</h1>
      </div>

      {/*  Change problem container */}
      {isPidPage && (
        <div className={classes.togglePidContainer}>
          <div className={classes.arrowWrp}>
            <IoIosArrowBack />
          </div>
          <Image src="/assets/problem.svg" alt="icon" width={16} height={16} />
          <p>Daily Question</p>
          <div className={classes.arrowWrp}>
            <IoIosArrowForward />
          </div>
        </div>
      )}

      <div className={classes.menu}>
        {(() => {
          if (!isPidPage) {
            return (
              <>
                <div className={classes.menuItem}>Problems</div>
                <div className={classes.menuItem}>Explore</div>
                <div className={classes.menuItem}>Product</div>
                <div className={classes.menuItem}>Develpper</div>
              </>
            );
          }

          return (
            <>
              <div className={classes.premium}>Premium</div>
              <Timer />
            </>
          );
        })()}

        {(() => {
          if (user) {
            return (
              <LogoutButton>
                <div className={classes.logoutBtn}>
                  <TbLogout />
                </div>
              </LogoutButton>
            );
          }
          return (
            <div className={classes.menuItem} onClick={onClickSignIn}>
              Sign in
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Header;
