/* eslint-disable @next/next/no-img-element */
import Header from '@/components/header/index';
import { IoIosArrowForward } from 'react-icons/io';
import classes from './style.module.scss';

export default function Home() {
  return (
    <main>
      <div className={classes.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.backgroundTwo}></div>
      <Header />
      <div className={classes.herocontainer}>
        <div className={classes.heroImage}>
          <img
            src="/assets/dashboard.png"
            alt="dashboard"
            width={100}
            height={100}
          />
        </div>
        <div className={classes.detailsCnt}>
          <h2>A New Way to Learn</h2>
          <p>
            LeetCode is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews.
          </p>
          <div className={classes.buttonContainer}>
            <button>
              Create Account <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
