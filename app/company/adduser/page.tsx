"use client"

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAddForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState('General');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Phone number must have exactly 10 digits');
      return;
    }

    // Form submission logic
    // ...

    // Display success notification
    toast.success('User created successfully');
  };

  return (
    <div>
      <h1 className='text-center my-5'>User Add Form</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobPosition" className="block text-sm font-medium text-gray-700">
            Job Position Type
          </label>
          <select
            id="jobPosition"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Level of Access</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="accessGeneral"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              value="General"
              checked={accessLevel === 'General'}
              onChange={() => setAccessLevel('General')}
            />
            <label htmlFor="accessGeneral" className="ml-2">
              General
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="accessAdmin"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              value="Admin"
              checked={accessLevel === 'Admin'}
              onChange={() => setAccessLevel('Admin')}
            />
            <label htmlFor="accessAdmin" className="ml-2">
              Admin
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserAddForm;
