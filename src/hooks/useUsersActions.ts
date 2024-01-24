import { useEffect, useState } from 'react';
import { auth, fireStore } from '@/firebase/firebase';
import { doc, getDoc, runTransaction } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { DBProblem } from '@/utils/types/problem';

type TData = {
  liked?: boolean;
  disLiked?: boolean;
  solved?: boolean;
  starred?: boolean;
};

export const useUsersActions = (pid: string, setCurrentProblem: any) => {
  const [data, setData] = useState<TData>({
    liked: false,
    disLiked: false,
    solved: false,
    starred: false,
  });
  const [user] = useAuthState(auth);
  const { liked, disLiked, solved, starred } = data;

  /** Function to fetch user information on problem */
  const handleFetchUserDataOfProblem = async () => {
    const userRef = doc(fireStore, 'users', user!.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const {
        likedProblems,
        solvedProblems,
        starredProblems,
        dislikedProblems,
      } = userSnap.data();
      setData({
        liked: likedProblems.includes(pid),
        disLiked: dislikedProblems.includes(pid),
        solved: solvedProblems.includes(pid),
        starred: starredProblems.includes(pid),
      });
    }
  };

  /** Function to show toast message */
  const handleShowTostMessage = (message?: string) => {
    toast.error(
      message || 'Login to like this problem and unleash your coolness! 😎',
      {
        position: 'top-center',
      }
    );
  };

  /**
   * Function to handle like functionality.
   * case - 1 user already liked the problme.
   * case - 2 user already dissliked the problme.
   * case - 3 user neither liked or dissliked the problem.
   */
  const handleLike = async () => {
    if (!user) {
      handleShowTostMessage();
      return;
    }
    try {
      await runTransaction(fireStore, async (transaction) => {
        const userRef = doc(fireStore, 'users', user!.uid);
        const problemRef = doc(fireStore, 'problems', pid);
        const userDoc = await transaction.get(userRef);
        const problemDoc = await transaction.get(problemRef);
        if (userDoc.exists() && problemDoc.exists()) {
          // remove problme id from likedProblems on user doc & decrement the likes on problrm document
          if (liked) {
            transaction.update(userRef, {
              likedProblems: userDoc
                .data()
                .likedProblems.filter((id: string) => id !== pid),
            });
            transaction.update(problemRef, {
              likes: problemDoc.data().likes - 1,
            });
            setCurrentProblem((prev: DBProblem) => ({
              ...prev,
              likes: prev.likes - 1,
            }));
            setData({ ...data, liked: false });
          }
        }
      });
    } catch (error) {
      console.error('Something went wrong: ', error);
    }
  };

  /** Effect to fetch data iflogged in and reset data onmount */
  useEffect(() => {
    if (user) {
      handleFetchUserDataOfProblem();
    }

    return () => {
      setData({
        liked: false,
        disLiked: false,
        solved: false,
        starred: false,
      });
    };
  }, [pid, user]);

  return { ...data, setData, handleLike };
};
