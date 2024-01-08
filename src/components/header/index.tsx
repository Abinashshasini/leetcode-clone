import { FC } from 'react';
import Image from 'next/image';
import classes from './style.module.scss';

type THeaderProps = {
  onClickSignIn: () => void;
};

const Header: FC<THeaderProps> = ({ onClickSignIn }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Image src="/assets/logo.png" width={100} height={100} alt="logo" />
        <h1>Leetcode</h1>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuItem}>Problems</div>
        <div className={classes.menuItem}>Explore</div>
        <div className={classes.menuItem}>Product</div>
        <div className={classes.menuItem}>Develpper</div>
        <div className={classes.menuItem} onClick={onClickSignIn}>
          Sign in
        </div>
      </div>
    </div>
  );
};

export default Header;
