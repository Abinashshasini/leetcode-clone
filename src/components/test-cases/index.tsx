'use client';
import React, { FC, useState } from 'react';
import { Problem } from '@/utils/types/problem';
import { FaRegCheckSquare } from 'react-icons/fa';
import classes from './style.module.scss';

type TProps = {
  problem: Problem;
};

const TestCases: FC<TProps> = ({ problem }) => {
  /** Required states and refs */
  const [active, setActive] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.codeHeader}>
        <div className={classes.codeHdrCnt}>
          <FaRegCheckSquare />
          Testcases
        </div>
      </div>
      <div className={classes.casesContainer}>
        <div className="flex gap-2">
          {problem?.examples.map((element, index) => (
            <div
              key={element.id}
              className={classes.cases}
              data-active={active === index}
              onClick={() => setActive(index)}
            >
              <p>Case {index + 1}</p>
            </div>
          ))}
        </div>

        {problem?.examples.map((element, index) => (
          <>
            {active === index && (
              <div className="py-4 w-full" key={element.id}>
                {element.inputText && (
                  <div className={classes.testCases}>
                    <h3>Input :</h3>
                    <pre>{element.inputText}</pre>
                  </div>
                )}
                {element.outputText && (
                  <div className={classes.testCases}>
                    <h3>Output :</h3>
                    <pre>{element.outputText}</pre>
                  </div>
                )}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TestCases;
