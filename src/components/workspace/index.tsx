'use client';
import React, { FC } from 'react';
import Split from 'react-split';
import ProblemDescription from '../problem-description/index';

const WorkSpace: FC = () => {
  return (
    <Split className="split" minSize={50}>
      <ProblemDescription />
      <div>Bakchodi</div>
    </Split>
  );
};

export default WorkSpace;
