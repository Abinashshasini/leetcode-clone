'use client';
import {
  FaFlask,
  FaTag,
  FaLock,
  FaLightbulb,
  FaComments,
  FaRegStar,
  FaStar,
} from 'react-icons/fa';
import Image from 'next/image';
import { GrNotes } from 'react-icons/gr';
import {
  AiOutlineLike,
  AiOutlineQuestionCircle,
  AiFillLike,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { RiShareBoxLine } from 'react-icons/ri';
import { SlDislike } from 'react-icons/sl';
import { IoDocumentText } from 'react-icons/io5';
import { MdFullscreen } from 'react-icons/md';
import { Problem } from '@/utils/types/problem';
import useGetCurrentProblem from '@/hooks/useGetCurrentProblem';
import { useUsersActions } from '@/hooks/useUsersActions';
import classes from './style.module.scss';

type ProblemDescriptionProps = {
  onStretch: (_params: string) => void;
  problem: Problem;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  onStretch,
  problem,
}) => {
  /** Hooks to fetch data */
  const { currentProblem, loading, setCurrentProblem } = useGetCurrentProblem(
    problem.id
  );
  const {
    liked,
    disLiked,
    starred,
    setData,
    solved,
    updating,
    handleLike,
    handleStar,
    handleDislike,
  } = useUsersActions(problem.id, setCurrentProblem);

  return (
    <div className={classes.container}>
      <div className="flex px-0 h-[calc(100vh-94px)] overflow-y-auto flex-col pb-8 hide-scrollbar">
        {/* Tabs */}
        <div className={classes.tabContainers}>
          <div className={classes.tabs}>
            <IoDocumentText color="#1890ff" />
            Description
          </div>
          <div className={classes.tabs}>
            <GrNotes color="#fea116" />
            Notes
          </div>
          <div className={classes.tabs}>
            <FaFlask color="#1da09c" />
            Solutions
          </div>
          <div
            className="fullScreenIcon"
            onClick={() => onStretch('description')}
          >
            <MdFullscreen />
          </div>
        </div>
        <div className="px-5 py-3">
          {/* Problem heading */}
          <div className="w-full pt-9">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-2xl text-white font-medium">
                {problem?.title}
              </div>
            </div>
            {/* Tabs */}
            <div className="flex items-center mt-4">
              {!loading && (
                <div
                  className={`${classes.filterBtn} ${classes.type}`}
                  data-type={currentProblem?.difficulty}
                >
                  {currentProblem?.difficulty}
                </div>
              )}

              <div className={`${classes.filterBtn} ${classes.type}`}>
                <FaTag />
                Topics
              </div>
              <div className={`${classes.filterBtn} ${classes.type}`}>
                <FaLock />
                Companies
              </div>
              <div className={`${classes.filterBtn} ${classes.type}`}>
                <FaLightbulb />
                Hint
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm py-2">
              <span
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="my-8">
              {problem?.examples?.map((example, index) => (
                <div key={example.id}>
                  <p className="text-sm text-white">Example {index + 1}: </p>
                  {example?.img && (
                    <Image
                      src={example.img}
                      alt="image"
                      width={500}
                      height={300}
                      className={classes.image}
                    />
                  )}
                  <div className="example-card">
                    <pre>
                      <span>
                        <strong>Input: </strong>
                        {example.inputText} <br />
                      </span>
                      <span>
                        <strong>Output:</strong> {example.outputText}
                      </span>
                      <span>
                        <strong>Explanation:</strong>
                        {example.explanation}
                      </span>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5">
              {problem?.constraints && (
                <>
                  <div className="text-white text-sm font-medium">
                    Constraints:
                  </div>
                  <ul className="text-white ml-5 list-disc">
                    <span
                      dangerouslySetInnerHTML={{ __html: problem.constraints }}
                    />
                  </ul>
                </>
              )}
            </div>

            {/* Footer buttons */}
            <div className={classes.footerContanier}>
              <div className={classes.footerLikeCnt}>
                <div className={classes.linkcnt} onClick={handleLike}>
                  {updating && (
                    <AiOutlineLoading3Quarters className="animate-spin w-3 h-3" />
                  )}
                  {!updating && liked && <AiFillLike color="1890ff" />}
                  {!updating && !liked && <AiOutlineLike />}
                  <p>{currentProblem?.likes}</p>
                </div>
                <div
                  className={`${classes.linkcnt} ${classes.bradious}`}
                  onClick={handleDislike}
                >
                  {updating && (
                    <AiOutlineLoading3Quarters className="animate-spin w-3 h-3" />
                  )}
                  {!updating && <SlDislike color={disLiked ? '1890ff' : ''} />}
                </div>
              </div>

              <div className={`${classes.linkcnt} ${classes.bradious}`}>
                <p>{currentProblem?.comments?.length}</p> <FaComments />
              </div>
              <span className={classes.divider} />
              <div
                className={`${classes.linkcnt} ${classes.bradious}`}
                onClick={handleStar}
              >
                {updating && (
                  <AiOutlineLoading3Quarters className="animate-spin w-3 h-3" />
                )}
                {!updating && starred && <FaStar color="fea116" />}
                {!updating && !starred && <FaRegStar />}
              </div>
              <div className={`${classes.linkcnt} ${classes.bradious}`}>
                <RiShareBoxLine />
              </div>
              <div className={`${classes.linkcnt} ${classes.bradious}`}>
                <AiOutlineQuestionCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;
