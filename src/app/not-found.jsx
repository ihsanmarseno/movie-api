import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="mb-4 text-3xl sm:text-4xl">404 - Page Not Found</h1>
      <p className="text-lg text-center">Sorry, the page you were looking for was not found</p>
      <Link href="/" className="m-2 text-lg text-center underline">Back</Link>
    </div>
  );
};

export default NotFound;
