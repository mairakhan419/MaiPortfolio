import React from 'react';
import './bird.css';

function Birds() {
  return (
    <>
      <svg
        class="bird bird-1"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="100"
        viewBox="0 0 200 100"
      >
        <path d="M20 80 Q50 20, 80 80 Q110 20, 140 80" />
      </svg>

      <svg
        class="bird bird-2"
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="75"
        viewBox="0 0 200 100"
      >
        <path d="M20 80 C40 30, 60 30, 80 80 C100 30, 120 30, 140 80" />
      </svg>

      <svg
        class="bird bird-3"
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="90"
        viewBox="0 0 200 100"
      >
        <path d="M20 80 Q50 20, 80 80 Q110 20, 140 80" />
      </svg>

      <svg
        className="bird bird-4"
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="110"
        viewBox="0 0 200 100"
      >
        <path d="M20 80 Q50 20, 80 80 Q110 20, 140 80" />
      </svg>

      <svg
        class="bird bird-5"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="80"
        viewBox="0 0 200 100"
      >
        <path d="M20 80 Q50 20, 80 80 Q110 20, 140 80" />
      </svg>
    </>
  );
}

export default Birds;
