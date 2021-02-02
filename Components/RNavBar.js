import React from 'react';
import Link from 'next/link';

export default function Nav({ children }) {
    return (
      <div className="py-5 px-8 bg-gray-700 text-white flex justify-between">
          
        <div className="flex space-x-10 float-right items-center">

          {children}

        </div>
      </div>
    )
  }
  