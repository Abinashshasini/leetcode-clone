import React, { FC } from 'react';
import Split from 'react-split';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { IoIosSettings } from 'react-icons/io';
import classes from './style.module.scss';
import { Problem } from '@/utils/types/problem';
import TestCases from '../test-cases/index';

type Tprops = {
  problem: Problem;
};

const PlayGround: FC<Tprops> = ({ problem }) => {
  return (
    <Split
      direction="vertical"
      className="h-[calc(100vh-90px)] flex-1"
      sizes={[60, 40]}
    >
      <div className={classes.codeEditor}>
        <div className={classes.codeHeader}>
          <div className={classes.codeHdrCnt}>
            <Image
              src="/assets/code.svg"
              alt="code_icon"
              width={20}
              height={15}
            />
            Code
          </div>
          <div className="flex items-center gap-2">
            <IoIosSettings className="w-5 h-5 text-white cursor-pointer" />
            <div className={classes.codeHdrCnt}>JavaScript</div>
          </div>
        </div>
        <CodeMirror
          value={problem.starterCode}
          theme={vscodeDark}
          extensions={[javascript()]}
          style={{ fontSize: 14 }}
        />
      </div>
      <TestCases problem={problem} />
    </Split>
  );
};

export default PlayGround;
