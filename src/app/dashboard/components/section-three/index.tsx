import React from 'react';
import Image from 'next/image';
import classes from './style.module.scss';

const SectionThree = () => {
  return (
    <section className={classes.container}>
      <div className={classes.items}>
        <Image src="/assets/all_topics.svg" alt="icon" width={40} height={40} />
        <p>All Topics</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/algorithms.svg" alt="icon" width={40} height={40} />
        <p>Algorithms</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/database.svg" alt="icon" width={40} height={40} />
        <p>Database</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/shell.svg" alt="icon" width={40} height={40} />
        <p>Shell</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/currency.svg" alt="icon" width={40} height={40} />
        <p>Currency</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/javascript.svg" alt="icon" width={40} height={40} />
        <p>Javascript</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/pandas.svg" alt="icon" width={40} height={40} />
        <p>Pandas</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/python.svg" alt="icon" width={40} height={40} />
        <p>Python</p>
      </div>
      <div className={classes.items}>
        <Image src="/assets/java.svg" alt="icon" width={40} height={40} />
        <p>Java</p>
      </div>
    </section>
  );
};

export default SectionThree;
