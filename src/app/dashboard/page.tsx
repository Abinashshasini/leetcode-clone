import React from 'react';
import Header from '@/components/header/index';
import SectionOne from './components/section-one/index';
import SectionTwo from './components/section-two/index';
import classes from './style.module.scss';

const Dashboard = () => {
  return (
    <main>
      <Header isBackgroundPresent />
      <section className={classes.container}>
        <SectionOne />
        <SectionTwo />
      </section>
    </main>
  );
};

export default Dashboard;
