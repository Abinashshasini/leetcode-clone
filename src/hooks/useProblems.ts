import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { fireStore } from '@/firebase/firebase';
import { DBProblem } from '@/utils/types/problem';

type TProps = {};

const useProblems = () => {
  /** Required states and props */
  const [problems, setProblems] = useState<DBProblem[]>([]);
  const [loading, setLoading] = useState(true);

  /** Function to fetch problems data from firebase */
  const handleFetchProblems = async () => {
    try {
      setLoading(true);
      const _query = query(
        collection(fireStore, 'problems'),
        orderBy('order', 'asc')
      );
      const response = await getDocs(_query);
      const filteredProblems: DBProblem[] = [];
      response.forEach((doc) => {
        filteredProblems.push({ id: doc.id, ...doc.data() } as DBProblem);
      });
      setLoading(false);
      setProblems(filteredProblems);
    } catch (error) {
      setLoading(false);
      console.error('Something went wrong while fetching ', error);
    }
  };

  useEffect(() => {
    handleFetchProblems();
  }, []);

  return { problems, loading };
};

export default useProblems;
