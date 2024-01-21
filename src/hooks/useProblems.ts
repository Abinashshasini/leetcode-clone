import { useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { fireStore } from '@/firebase/firebase';

type TProps = {};

const useProblems = () => {
  /** Required states and props */
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  /** Function to fetch problems data from firebase */
  const handleFetchProblems = async () => {
    try {
      setLoading(true);
      const _query = query(
        collection(fireStore, 'problems'),
        orderBy('order', 'desc')
      );
      const response = await getDocs(_query);
      console.log('response: ', response);
    } catch (error) {
      setLoading(false);
      console.error('Something went wrong while fetching ', error);
    }
  };

  return { problems, loading };
};

export default useProblems;
