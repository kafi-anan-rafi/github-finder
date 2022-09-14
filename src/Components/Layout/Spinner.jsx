import React from 'react'
import spinner from './Assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-200'>
      <img
        width={200}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;