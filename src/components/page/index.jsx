import React from 'react';

import "./page.css"

export default function Page({ children }) {
  return (
      <div className='page'>

        {children}
      </div>
  );
}
