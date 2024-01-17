import React from 'react';
import PidHeader from '@/components/pid-header/index';
import WorkSpace from '@/components/workspace/index';
import { problems } from '@/utils/problems/index';
import classes from './style.module.scss';


/** Function to fetch blog data */
const handleFetchProblemData = (pid: string) => {
  const problem = Object.keys(problems).filter((problem) => ({
    data: {
      pid: problem
    }
  }))

  return problem
}

const PidPage = async ({ params }: { params: any}) => {

  const problem = handleFetchProblemData(params.pid)
  
  return (
    <main className={classes.container}>
      <PidHeader />
      <WorkSpace />
    </main>
  );
};

export default PidPage;
