'use client';
import React, { FC } from 'react';
import Split from 'react-split';
import PlayGround from '../playground/index';
import ProblemDescription from '../problem-description/index';

const WorkSpace: FC = () => {
  return (
    <Split
      className="split"
      minSize={50}
      style={{ padding: '1rem', paddingTop: '5px' }}
      sizes={[50, 50]}
    >
      <ProblemDescription onStretch={() => {}} />
      <PlayGround />
    </Split>
  );
};

export default WorkSpace;
