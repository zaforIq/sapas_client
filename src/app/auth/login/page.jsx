"use client";

import React from 'react';
import { useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { logIn } from '@/lib/apiStudent';
import {jwtDecode} from 'jwt-decode';

const Page = () => {
  const [user,setUser]=useState({ email: '', password: '' });
  const { email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(user)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          const { token, student } = res;
          localStorage.setItem('student', JSON.stringify(student));
          localStorage.setItem('token', token);
          const decoded = jwtDecode(token);
          console.log("Hello decode",decoded);
          alert('Log insuccessful');
          window.location.href = '/';
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  };




  return (
     <ScrollArea className="h-full">
    <div className="flex justify-center mt-20">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              

            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>


          </div>

           <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <a
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/auth/signup"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
    </ScrollArea>
  );
};

export default Page;