import React, { FC } from 'react';
import Split from 'react-split';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { IoIosSettings } from 'react-icons/io';
import classes from './style.module.scss';

const PlayGround: FC = () => {
  return (
    <Split
      direction="vertical"
      className="h-[calc(100vh-90px)]"
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
          value="const a = 1"
          theme={vscodeDark}
          extensions={[javascript()]}
          style={{ fontSize: 16 }}
        />
      </div>
      <div className={classes.textCases}>testcase</div>
    </Split>
  );
};

export default PlayGround;
