/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosMore } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Input from '../ui/input/index';
import Button from '../ui/button/index';
import classes from './style.module.scss';
import { auth } from '@/firebase/firebase';

type TFormValues = {
  email: string;
  userName?: string;
  password?: string;
};

type TProps = {
  handleClose: () => void;
};

const LoginModal: FC<TProps> = ({ handleClose }) => {
  const router = useRouter();
  /** Required states and props */
  const [formType, setFormType] = useState('register');

  /** React hook form for form management */
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  /** Firebase hook for login/signup */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  /** Function to register user */
  const handleRegistreUser = async (
    email: string,
    password: string | undefined
  ) => {
    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser) return;
      toast.success('Voila your account created successfully', {
        position: 'top-center',
        icon: '👏',
      });
      router.push('/dashboard');
      handleClose();
    } catch (error: any) {
      console.error('Something went wrong while registering the user');
    }
  };

  /** Function to submit the form */
  const onSubmit = async (data: TFormValues) => {
    const { email, password } = data;
    if (formType === 'register') {
      handleRegistreUser(email, password);
    }
  };

  /** Effect to reset all fileds if form type changes */
  useEffect(() => {
    reset({
      email: '',
      userName: '',
      password: '',
    });
  }, [formType]);

  /** Effect to handle errors */
  useEffect(() => {
    if (error) {
      toast.error('This email is alredy exists', {
        position: 'top-center',
      });
    }
  }, [error]);

  return (
    <div className={classes.conatiner}>
      <div className={classes.wraper}>
        <div className="flex justify-center py-8">
          <Image
            src="assets/logo-black.svg"
            alt="logo"
            width={90}
            height={90}
          />
        </div>
        {formType === 'forget_password' && (
          <p className="p-3 text-sm color_text_blue">
            Forgotten your password? Enter your e-mail address bellow, and
            we&apos;ll send you an e-mail allowing you to reset it.
          </p>
        )}
        <div className="w-full py-4 px-3">
          <Input
            placeholder="Email"
            type="email"
            error={errors?.email?.message || ''}
            {...register('email', {
              required: {
                value: true,
                message: 'Email is require',
              },
            })}
          />
          {formType === 'register' && (
            <Input
              placeholder="User Name"
              type="text"
              error={errors?.userName?.message || ''}
              {...register('userName', {
                required: {
                  value: true,
                  message: 'UserName is require',
                },
                minLength: {
                  value: 10,
                  message: 'Username should be min 10 characters',
                },
                maxLength: {
                  value: 30,
                  message: 'Username should be max 30 characters',
                },
              })}
            />
          )}
          {formType !== 'forget_password' && (
            <Input
              placeholder="Password"
              type="text"
              error={errors?.password?.message || ''}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is require',
                },
                minLength: {
                  value: 10,
                  message: 'Password should be min 10 characters',
                },
                maxLength: {
                  value: 30,
                  message: "Password can't be more than 30 characters",
                },
              })}
            />
          )}
          {(() => {
            if (formType === 'login') {
              return (
                <div className="flex justify-between items-center pb-2">
                  <div className={classes.forgetPas}>
                    Dont have an account{' '}
                    <b onClick={() => setFormType('register')}>Sign in</b>
                  </div>
                  <div
                    className={classes.forgetPas}
                    onClick={() => setFormType('forget_password')}
                  >
                    Forget Password?
                  </div>
                </div>
              );
            }

            if (formType === 'register') {
              return (
                <div className="flex justify-between items-center pb-2">
                  <div className={classes.forgetPas}>
                    Already have an account{' '}
                    <b onClick={() => setFormType('login')}>Register</b>
                  </div>
                  <div
                    className={classes.forgetPas}
                    onClick={() => setFormType('forget_password')}
                  >
                    Forget Password?
                  </div>
                </div>
              );
            }

            return null;
          })()}
          <Button
            variant="contained"
            className="w-full capitalize my-3"
            text={formType === 'forget_password' ? 'Reset Password' : formType}
            onClick={handleSubmit(onSubmit)}
          />
          <div className="text-center my-6 font-light text-sm color_gray">
            or you can sign in with
          </div>
          <div className="flex w-full justify-center items-center gap-8">
            <div className={classes.iconCnt}>
              <FaGoogle />
            </div>
            <div className={classes.iconCnt}>
              <FaGithub />
            </div>
            <div className={classes.iconCnt}>
              <FaFacebook />
            </div>
            <div className={classes.iconCnt}>
              <IoIosMore />
            </div>
          </div>
          <div className="text-center my-6 font-light text-sm color_gray px-6">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
