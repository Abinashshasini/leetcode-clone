'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/header/index';
import SectionOne from '@/components/section-one/index';
import SectionTwo from '@/components/section-two/index';
import AllProblems from '@/components/all-problems/index';
import SectionThree from '@/components/section-three/index';
import AddProblems from '@/components/add-problems/index';
import classes from './style.module.scss';

const Dashboard = () => {
  return (
    <main>
      <Header isBackgroundPresent />
      <section className={classes.container}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <AllProblems />
        <AddProblems />
      </section>
    </main>
  );
};

export default Dashboard;
