import { useEffect, useState } from 'react';
import { auth, fireStore } from '@/firebase/firebase';
import {
  arrayUnion,
  arrayRemove,
  doc,
  getDoc,
  runTransaction,
  updateDoc,
} from 'firebase/firestore';
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
  const [updating, setUpdating] = useState<boolean>(false);

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

  const returnUserDataAndProblemData = async (transaction: any) => {
    const userRef = doc(fireStore, 'users', user!.uid);
    const problemRef = doc(fireStore, 'problems', pid);
    const userDoc = await transaction.get(userRef);
    const problemDoc = await transaction.get(problemRef);
    return { userDoc, problemDoc, userRef, problemRef };
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
    if (updating) return;
    try {
      setUpdating(true);
      await runTransaction(fireStore, async (transaction) => {
        const { problemDoc, userDoc, problemRef, userRef } =
          await returnUserDataAndProblemData(transaction);
        if (userDoc.exists() && problemDoc.exists()) {
          if (liked) {
            // remove problme id from likedProblems on user doc & decrement the likes on problrm document
            transaction.update(userRef, {
              likedProblems: userDoc
                .data()
                .likedProblems.filter((id: string) => id !== pid),
            });
            transaction.update(problemRef, {
              likes:
                problemDoc.data().likes > 0 ? problemDoc.data().likes - 1 : 0,
            });
            setCurrentProblem((prev: DBProblem) => ({
              ...prev,
              likes: prev.likes - 1,
            }));
            setData({ ...data, liked: false });
          } else if (disLiked) {
            // add problme id from likedProblems on user doc & increnemt the likes on problrm document and decrement the dislike count
            transaction.update(userRef, {
              likedProblems: [...userDoc.data().likedProblems, pid],
              dislikedProblems: userDoc
                .data()
                .dislikedProblems.filter((id: string) => id !== pid),
            });
            transaction.update(problemRef, {
              likes: problemDoc.data().likes + 1,
              dislikes:
                problemDoc.data().dislikes > 1
                  ? problemDoc.data().dislikes - 1
                  : 0,
            });
            setCurrentProblem((prev: DBProblem) => ({
              ...prev,
              likes: prev.likes + 1,
              dislikes: prev.dislikes - 1,
            }));
            setData({ ...data, liked: true, disLiked: false });
          } else {
            // add like to users likedProblem array and increment the likes count
            transaction.update(userRef, {
              likedProblems: [...userDoc.data().likedProblems, pid],
            });
            transaction.update(problemRef, {
              likes: problemDoc.data().likes + 1,
            });
            setCurrentProblem((prev: DBProblem) => ({
              ...prev,
              likes: prev.likes + 1,
            }));
            setData({ ...data, liked: true });
          }
        }
      });
    } catch (error) {
      setUpdating(false);
      console.error('Oops! something went wrong: ', error);
    } finally {
      setUpdating(false);
    }
  };

  /**
   * Function to handle like functionality.
   * case - 1 user already dissliked the problme.
   * case - 2 user already liked the problme.
   * case - 3 user neither liked or dissliked the problem.
   */
  const handleDislike = async () => {
    if (!user) {
      handleShowTostMessage();
      return;
    }
    if (updating) return;
    try {
      setUpdating(true);
      await runTransaction(fireStore, async (transaction) => {
        const { problemDoc, userDoc, problemRef, userRef } =
          await returnUserDataAndProblemData(transaction);
        if (userDoc.exists() && problemDoc.exists()) {
          // already disliked, already liked, not disliked or liked
          if (disLiked) {
            transaction.update(userRef, {
              dislikedProblems: userDoc
                .data()
                .dislikedProblems.filter((id: string) => id !== pid),
            });
            transaction.update(problemRef, {
              dislikes: problemDoc.data().dislikes - 1,
            });
            setCurrentProblem((prev: DBProblem) =>
              prev ? { ...prev, dislikes: prev.dislikes - 1 } : null
            );
            setData((prev) => ({ ...prev, disLiked: false }));
          } else if (liked) {
            transaction.update(userRef, {
              dislikedProblems: [...userDoc.data().dislikedProblems, pid],
              likedProblems: userDoc
                .data()
                .likedProblems.filter((id: string) => id !== pid),
            });
            transaction.update(problemRef, {
              dislikes: problemDoc.data().dislikes + 1,
              likes: problemDoc.data().likes - 1,
            });
            setCurrentProblem((prev: DBProblem) =>
              prev
                ? {
                    ...prev,
                    dislikes: prev.dislikes + 1,
                    likes: prev.likes - 1,
                  }
                : null
            );
            setData((prev) => ({ ...prev, disLiked: true, liked: false }));
          } else {
            transaction.update(userRef, {
              dislikedProblems: [...userDoc.data().dislikedProblems, pid],
            });
            transaction.update(problemRef, {
              dislikes: problemDoc.data().dislikes + 1,
            });
            setCurrentProblem((prev: DBProblem) =>
              prev ? { ...prev, dislikes: prev.dislikes + 1 } : null
            );
            setData((prev) => ({ ...prev, disLiked: true }));
          }
        }
      });
    } catch (error) {
      setUpdating(false);
      console.error('Oops! something went wrong: ', error);
    } finally {
      setUpdating(false);
    }
  };

  /** Function to start a unstar a problem */
  const handleStar = async () => {
    if (!user) {
      handleShowTostMessage();
      return;
    }
    if (updating) return;

    try {
      setUpdating(true);
      if (!starred) {
        const userRef = doc(fireStore, 'users', user.uid);
        await updateDoc(userRef, {
          starredProblems: arrayUnion(pid),
        });
        setData((prev) => ({ ...prev, starred: true }));
      } else {
        const userRef = doc(fireStore, 'users', user.uid);
        await updateDoc(userRef, {
          starredProblems: arrayRemove(pid),
        });
        setData((prev) => ({ ...prev, starred: false }));
      }
    } catch (error) {
      setUpdating(false);
      console.error('Oops! something went wrong: ', error);
    } finally {
      setUpdating(false);
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

  return {
    ...data,
    setData,
    updating,
    handleLike,
    handleStar,
    handleDislike,
  };
};
