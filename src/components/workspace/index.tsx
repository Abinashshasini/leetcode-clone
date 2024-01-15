'use client';
import React, { FC, useState } from 'react';
import Split from 'react-split';
import ProblemDescription from '../problem-description/index';

const WorkSpace: FC = () => {
  /** Required states and refs */
  const [stretchedComponent, setStretchedComponent] = useState('');
  console.log('stretchedComponent: ', stretchedComponent);

  /** Function to stretch one component */
  const handleStretch = (_params: string) => {
    setStretchedComponent(_params);
  };

  return (
    <Split className="split" minSize={50} style={{ padding: '1rem' }}>
      {(stretchedComponent === '' || stretchedComponent === 'description') && (
        <ProblemDescription onStretch={handleStretch} />
      )}

      {(stretchedComponent === '' || stretchedComponent === 'playground') && (
        <div>Bakchodi</div>
      )}
    </Split>
  );
};

export default WorkSpace;
