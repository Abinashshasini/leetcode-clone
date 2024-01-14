import React, { FC } from 'react';
import { FaSort } from 'react-icons/fa6';
import { TiArrowSortedDown } from 'react-icons/ti';
import classes from './style.module.scss';

const AllProblems: FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <span>Status</span>
        <span className={classes.title}>
          Title <TiArrowSortedDown />
        </span>
        <span>Solution</span>
        <span>
          <FaSort />
          Dificulty
        </span>
        <span>
          <FaSort />
          Category
        </span>
      </div>
    </section>
  );
};

export default AllProblems;
