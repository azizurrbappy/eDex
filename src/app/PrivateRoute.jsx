'use client';

import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-50vh)] justify-center items-center">
        <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
    );
  }

  if (!user) {
    return router.push('../auth/signin');
  }

  return children;
};

export default PrivateRoute;
