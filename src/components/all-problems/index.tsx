'use client';
import React, { FC, useState } from 'react';
import { FaSort } from 'react-icons/fa6';
import useProblems from '@/hooks/useProblems';
import { TiArrowSortedDown } from 'react-icons/ti';
import QuestionCard from '../question-card/index';
import classes from './style.module.scss';

const LoadingSkeleton = () => {
  return (
    <div className={`${classes.loader} animate-pulse`}>
      <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1 ml-2"></div>
      <div className="h-4 rounded-full bg-dark-layer-1 mr-4"></div>
      <div className="h-4 rounded-full bg-dark-layer-1 mr-4"></div>
      <div className="h-4 rounded-full bg-dark-layer-1 mr-4"></div>
      <div className="h-4 rounded-full bg-dark-layer-1 mr-4"></div>
      <div className="h-4 rounded-full bg-dark-layer-1"></div>
    </div>
  );
};

const AllProblems: FC = () => {
  /** Required hooks for fetching problems */
  const { problems, loading } = useProblems();

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
          Acceptance
        </span>
        <span>
          <FaSort />
          Dificulty
        </span>
        <span>
          <FaSort />
          Category
        </span>
      </div>
      {(() => {
        if (loading) {
          return (
            <>
              {[...Array(10)].map((_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </>
          );
        }
        return (
          <>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </>
        );
      })()}
    </section>
  );
};

export default AllProblems;
