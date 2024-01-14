/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillHexagonFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '@/components/header/index';
import LoginModal from '@/components/login-modal';
import { auth } from '@/firebase/firebase';
import classes from './style.module.scss';

export default function Home() {
  const router = useRouter();
  /** Required states and props */
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  /** Firebase hook to check if the user is already logged in */
  const [user] = useAuthState(auth);

  /** Effect to check if the user is already logged in */
  useEffect(() => {
    if (user) {
      router.push('/problems');
    }
  }, [user]);

  return (
    <main className={classes.main}>
      <div className={classes.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.backgroundTwo}></div>
      <Header onClickSignIn={() => setIsLoginModalOpen(true)} />
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
            <button onClick={() => setIsLoginModalOpen(true)}>
              Create Account <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className={classes.aboutContainer}>
        <div className={classes.detailsWarper}>
          <div className={classes.headingText}>
            <h2>Start Exploring</h2>
            <div className={classes.iconCnt}>
              <div className={classes.iconOne}>
                <BsFillHexagonFill />
              </div>
              <div className={classes.iconTwo}>
                <FaGraduationCap />
              </div>
            </div>
          </div>
          <p>
            Explore is a well-organized tool that helps you get the most out of
            LeetCode by providing structure to guide your progress towards the
            next step in your programming career.
          </p>
          <div className={classes.getStarted}>
            Get Started <IoIosArrowForward />
          </div>
        </div>
        <div className={classes.detailsImageWarper}>
          <img
            src="/assets/tasks.png"
            alt="dashboard"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className={classes.footer}>
        &copy; Abinash {new Date().getFullYear()} a comprehensive leetCode clone
        created with <b>Next JS</b> & ❤️
      </div>
      {isLoginModalOpen && (
        <LoginModal handleClose={() => setIsLoginModalOpen(false)} />
      )}
    </main>
  );
}
