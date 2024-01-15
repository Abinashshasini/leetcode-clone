import React from 'react';
import PidHeader from '@/components/pid-header/index';
import WorkSpace from '@/components/workspace/index';
import classes from './style.module.scss';

const PidPage = () => {
  return (
    <main className={classes.container}>
      <PidHeader />
      <WorkSpace />
    </main>
  );
};

export default PidPage;
