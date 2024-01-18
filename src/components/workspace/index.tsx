'use client';
import { Problem } from '@/utils/types/problem';
import React, { FC } from 'react';
import Split from 'react-split';
import PlayGround from '../playground/index';
import ProblemDescription from '../problem-description/index';

type Tprops = {
  problem: Problem;
};

const WorkSpace: FC<Tprops> = ({ problem }) => {
  return (
    <Split
      className="split"
      minSize={50}
      style={{ padding: '1rem', paddingTop: '5px' }}
      sizes={[50, 50]}
    >
      <ProblemDescription onStretch={() => {}} problem={problem} />
      <PlayGround problem={problem} />
    </Split>
  );
};

export default WorkSpace;
