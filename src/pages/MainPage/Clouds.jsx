import React from 'react';
import './bird.css';
function Clouds() {
  return (
    <>
      <svg
        class="cloud cloud1"
        width="200"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f8f8f8">
          <ellipse cx="60" cy="50" rx="30" ry="20" />
          <ellipse cx="90" cy="40" rx="30" ry="20" />
          <ellipse cx="120" cy="50" rx="30" ry="20" />
          <ellipse cx="90" cy="60" rx="50" ry="30" />
        </g>
      </svg>

      <svg
        class="cloud cloud2"
        width="200"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f8f8f8">
          <ellipse cx="60" cy="50" rx="30" ry="20" />
          <ellipse cx="90" cy="40" rx="30" ry="20" />
          <ellipse cx="120" cy="50" rx="30" ry="20" />
          <ellipse cx="90" cy="60" rx="50" ry="30" />
        </g>
      </svg>

      <svg
        class="cloud cloud3"
        width="150"
        height="75"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f8f8f8">
          <ellipse cx="45" cy="35" rx="25" ry="15" />
          <ellipse cx="70" cy="25" rx="25" ry="15" />
          <ellipse cx="100" cy="35" rx="25" ry="15" />
          <ellipse cx="70" cy="45" rx="40" ry="20" />
        </g>
      </svg>

      <svg
        class="cloud cloud4"
        width="180"
        height="90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f8f8f8">
          <ellipse cx="50" cy="45" rx="35" ry="20" />
          <ellipse cx="90" cy="35" rx="35" ry="20" />
          <ellipse cx="130" cy="45" rx="35" ry="20" />
          <ellipse cx="90" cy="55" rx="60" ry="30" />
        </g>
      </svg>

      <svg
        class="cloud cloud5"
        width="200"
        height="90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f1f1f1">
          <ellipse cx="75" cy="60" rx="50" ry="25" />
          <ellipse cx="125" cy="50" rx="50" ry="25" />
          <ellipse cx="175" cy="60" rx="50" ry="25" />
          <ellipse cx="125" cy="75" rx="75" ry="35" />
        </g>
      </svg>
    </>
  );
}

export default Clouds;
