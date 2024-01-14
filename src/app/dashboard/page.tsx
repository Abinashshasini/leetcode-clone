import React from 'react';
import Header from '@/components/header/index';
import SectionOne from './components/section-one/index';
import SectionTwo from './components/section-two/index';
import AllProblems from './components/all-problems/index';
import classes from './style.module.scss';
import SectionThree from './components/section-three/index';

const Dashboard = () => {
  return (
    <main>
      <Header isBackgroundPresent />
      <section className={classes.container}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <AllProblems />
      </section>
    </main>
  );
};

export default Dashboard;
