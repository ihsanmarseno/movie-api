"use client"

import React, { useEffect } from 'react';

const Loading = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // Lakukan sesuatu setelah 1 detik, misalnya menampilkan komponen lain
  //   }, 1000);

  //   // Bersihkan timer saat komponen di-unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <div className="loading-container">
    //   <div className="loader"></div>
    //   <style jsx>{`
    //     .loading-container {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 100vh;
    //     }

    //     .loader {
    //       border: 8px solid #f3f3f3; /* Warna loading */
    //       border-top: 8px solid #3498db; /* Warna loading */
    //       border-radius: 50%;
    //       width: 50px;
    //       height: 50px;
    //       animation: spin 2s linear infinite;
    //     }

    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `}</style>
    // </div>
    <>
    <span className="flex justify-center h-screen mx-auto loading loading-bars loading-lg text-[#363062]"></span> 
    </>
  );
};

export default Loading;