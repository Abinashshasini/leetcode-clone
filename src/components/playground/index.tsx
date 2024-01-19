'use client';
import React, { FC, useState } from 'react';
import Split from 'react-split';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { IoIosSettings } from 'react-icons/io';
import { Problem } from '@/utils/types/problem';
import TestCases from '../test-cases/index';
import classes from './style.module.scss';

type Tprops = {
  problem: Problem;
};

const fontSizes = [10, 12, 14, 16, 18, 20];

const PlayGround: FC<Tprops> = ({ problem }) => {
  /** Required states and refs */
  const [fontSize, setFontSize] = useState<number>(14);
  const [showFontSizePopup, setShowFontSizePopup] = useState<boolean>(false);

  /** Function to select font sizes */
  const handleSelectFontSize = (selectedFont: number) => {
    setShowFontSizePopup(false);
    setFontSize(selectedFont);
  };

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
          <div className="flex items-center gap-2 relative">
            <IoIosSettings
              className="w-5 h-5 text-white cursor-pointer"
              onClick={() => setShowFontSizePopup(!showFontSizePopup)}
            />
            <div className={classes.codeHdrCnt}>JavaScript</div>
            {showFontSizePopup && (
              <div className={classes.fontPopup}>
                {fontSizes.map((element) => (
                  <p
                    key={element}
                    onClick={() => handleSelectFontSize(element)}
                  >
                    {element}px
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <CodeMirror
          value={problem.starterCode}
          theme={vscodeDark}
          extensions={[javascript()]}
          style={{ fontSize: fontSize }}
        />
      </div>
      <TestCases problem={problem} />
    </Split>
  );
};

export default PlayGround;
