/* eslint-disable react-hooks/exhaustive-deps */
import { fireStore } from '@/firebase/firebase';
import { DBProblem } from '@/utils/types/problem';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetCurrentProblem = (problemId: string) => {
  /** Required states and refs */
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /** Function to fetch user problem data from dB */
  const handleFetchCurrentProblemData = async () => {
    try {
      const docRef = doc(fireStore, 'problems', problemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const problem = docSnap.data();
        setCurrentProblem({ id: docSnap.id, ...problem } as DBProblem);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Something went wrong: ', error);
    }
  };

  useEffect(() => {
    handleFetchCurrentProblemData();
  }, [problemId]);

  return { currentProblem, loading, setCurrentProblem };
};

export default useGetCurrentProblem;
