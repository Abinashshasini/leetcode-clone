import React from 'react';
import PidHeader from '@/components/pid-header/index';
import WorkSpace from '@/components/workspace/index';
import { problems } from '@/utils/problems/index';
import classes from './style.module.scss';

const PidPage = async ({ params }: { params: any }) => {
  /** Function to retrive data */
  const response = problems[params.pid];
  response.handlerFunction = response.handlerFunction.toString();

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return (
    <main className={classes.container}>
      <PidHeader />
      <WorkSpace problem={response} />
    </main>
  );
};

export default PidPage;
