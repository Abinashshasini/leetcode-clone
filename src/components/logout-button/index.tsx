'use client';
import React, { FC, useEffect } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase';

type TLogoutButtonProps = {
  children: string | JSX.Element | JSX.Element[];
};

const LogoutButton: FC<TLogoutButtonProps> = ({ children }) => {
  const router = useRouter();
  /** Required hook to signout the user */
  const [signOut, loading, error] = useSignOut(auth);

  /** Function to logout the user */
  const handleLogout = async () => {
    try {
      const response = await signOut();
      if (response) {
        toast.success("Adiós, amigo! You've been successfully logged out.", {
          position: 'top-center',
        });
        router.push('/');
      }
    } catch (error) {}
  };

  /** Effect to handle errors */
  useEffect(() => {
    if (error) {
      toast.error(
        'Houston, we have a problem! Our servers are taking a break. Give it a moment and retry.',
        {
          position: 'top-center',
        }
      );
    }
  }, [error]);

  return <div onClick={handleLogout}>{children}</div>;
};

export default LogoutButton;
