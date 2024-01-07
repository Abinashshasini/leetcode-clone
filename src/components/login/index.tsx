'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosMore } from 'react-icons/io';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import Input from '../ui/input/index';
import Button from '../ui/button/index';
import classes from './style.module.scss';

let buttonText = 'Login';
const LoginModal: FC = () => {
  /** Required states and props */
  const [formType, setFormType] = useState('login');
  const [userInfo, setUserInfo] = useState({
    email: '',
    userName: '',
    password: '',
  });
  const { email, userName, password } = userInfo;

  /** Function to handle input change */
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  /** Effect to reset the user info state whene there is form type change */
  useEffect(() => {
    setUserInfo({
      email: '',
      userName: '',
      password: '',
    });
  }, [formType]);

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
        <div className="w-full py-4 px-3">
          <Input
            placeholder="Your email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          {formType === 'register' && (
            <Input
              placeholder="User Name"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
          )}
          {formType !== 'forget_password' && (
            <Input
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          )}
          <Button
            variant="contained"
            className="w-full capitalize"
            text={formType === 'forget_password' ? 'Send Email' : formType}
          />
          {(() => {
            if (formType === 'login') {
              return (
                <div className="flex justify-between items-center py-4">
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
                <div className="flex justify-between items-center py-4">
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
