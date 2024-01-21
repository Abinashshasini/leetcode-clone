'use client';
import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { fireStore } from '@/firebase/firebase';
import { toast } from 'react-hot-toast';
import Modal from '../ui/modal/index';

const AddProblems = () => {
  /** Requires staes and props */
  const [openModal, setOpenModal] = useState(false);
  const [inputes, setInputes] = useState({
    id: '',
    title: '',
    difficulty: '',
    category: '',
    solutions: '',
    order: 0,
    likes: 0,
    link: '',
    status: false,
    dislikes: 0,
    isFavourite: false,
    comments: [],
  });

  /** Function to handle changes in input fileds */
  const handleInputesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputes({ ...inputes, [e.target.name]: e.target.value });
  };

  /** Function to submit the problem to dB */
  const handleSubmitTodB = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProblem = { ...inputes, order: Number(inputes.order) };
    try {
      await setDoc(doc(fireStore, 'problems', inputes.id), newProblem);
      toast.success('Voila problem added to dB', {
        position: 'top-center',
        icon: '👏',
      });
    } catch (error) {
      toast.error('Ohhno!!! something went wrong', {
        position: 'top-center',
        icon: '😭',
      });
    }
  };

  return (
    <Modal
      renderChildren={({ closeModal }: { closeModal: () => void }) => (
        <div>
          <form className="p-6 flex flex-col gap-3" onSubmit={handleSubmitTodB}>
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="problem id"
              name="id"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="title"
              name="title"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="difficulty"
              name="difficulty"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="category"
              name="category"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="solutions"
              name="solutions"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="text"
              placeholder="links"
              name="links"
              className="p-4"
            />
            <input
              onChange={handleInputesChange}
              type="number"
              placeholder="order"
              name="order"
              className="p-4"
            />
            <button className="bg-white py-2">save</button>
          </form>
        </div>
      )}
      open={openModal}
      onClose={() => setOpenModal(false)}
    />
  );
};

export default AddProblems;
