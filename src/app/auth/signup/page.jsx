"use client";

import React, { useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { jwtDecode } from 'jwt-decode';

import { signUp } from '@/lib/apiStudent';


const SignupPage = () => {
  const [user, setUser] = useState({ studentId:'', name: '',department:'', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user)
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          const { token, student } = res;
          localStorage.setItem('student', JSON.stringify(student));
          localStorage.setItem('token', token);
          const decoded = jwtDecode(token);
          console.log("Hello decode",decoded);
          alert('Sign up successful');
          window.location.href = '/';
          
        }
      })
      .catch((err) => {
        alert('Sign up failed');
      });
    
  };


  return (
    <ScrollArea className="h-full">
    <div className="flex justify-center mt-20">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
              Student ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="studentId"
              type="text"
              placeholder="studentId"
              value={user.studentId}
              onChange={(e) => setUser({ ...user, studentId: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
              Department
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="department"
              type="text"
              placeholder="department"
              value={user.department}
              onChange={(e) => setUser({ ...user, department: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
           <div className=" text-center">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <a
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/auth/login"
            >
              Log In
            </a>
          </div>
          </div>
        </form>
      </div>
    </div>
    </ScrollArea>
  );
};

export default SignupPage;