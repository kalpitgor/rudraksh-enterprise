import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 200, height = 80 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rudraksh Text - exact match to provided logo */}
      <text
        x="10"
        y="40"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#9cc724"
      >
        R
      </text>
      <text
        x="40"
        y="40"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#9cc724"
      >
        udraksh
      </text>
      
      {/* Leaf on 'd' - single leaf from bottom-left curve */}
      <g transform="translate(50, 30)">
        <path
          d="M0,8 Q-2,12 -1,16 Q0,18 2,16 Q3,12 0,8"
          fill="#9cc724"
        />
      </g>
      
      {/* Two leaves on 'a' - extending upwards from top-left curve */}
      <g transform="translate(70, 20)">
        <path
          d="M0,5 Q-2,8 -1,12 Q0,13 1,12 Q2,8 0,5"
          fill="#9cc724"
        />
        <path
          d="M0,3 Q-1,6 0,9 Q1,6 0,3"
          fill="#9cc724"
        />
      </g>
      
      {/* Stylized 'h' with stem, large leaf and fork, plus smaller leaf */}
      <g transform="translate(120, 25)">
        {/* Left vertical stroke of 'h' */}
        <rect x="0" y="0" width="4" height="20" fill="#9cc724" />
        
        {/* Right side of 'h' */}
        <rect x="8" y="0" width="4" height="20" fill="#9cc724" />
        
        {/* Horizontal connector */}
        <rect x="0" y="8" width="12" height="4" fill="#9cc724" />
        
        {/* Stem extending from top-right of 'h' */}
        <path
          d="M12,8 Q15,6 18,8 Q20,10 22,12"
          stroke="#9cc724"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Large prominent leaf with fork */}
        <g transform="translate(20, 10)">
          <path
            d="M0,0 Q-5,3 -8,8 Q-10,12 -8,16 Q-5,18 0,16 Q5,18 8,16 Q10,12 8,8 Q5,3 0,0"
            fill="#9cc724"
          />
          
          {/* Four-tined fork inside the leaf */}
          <g transform="translate(-2, 6)">
            <rect x="0" y="0" width="1" height="4" fill="white" />
            <rect x="-1" y="2" width="1" height="1" fill="white" />
            <rect x="1" y="2" width="1" height="1" fill="white" />
            <rect x="-0.5" y="3" width="1" height="1" fill="white" />
            <rect x="0.5" y="3" width="1" height="1" fill="white" />
          </g>
        </g>
        
        {/* Smaller leaf above the stem */}
        <g transform="translate(18, 4)">
          <path
            d="M0,0 Q-2,2 -3,4 Q-2,6 0,4 Q2,6 3,4 Q2,2 0,0"
            fill="#9cc724"
          />
        </g>
      </g>
      
      {/* ENTERPRISE Text */}
      <text
        x="100"
        y="65"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#ff9a00"
        textAnchor="middle"
        letterSpacing="2"
      >
        ENTERPRISE
      </text>
      
      {/* Decorative lines flanking ENTERPRISE */}
      <line
        x1="20"
        y1="60"
        x2="50"
        y2="60"
        stroke="#9cc724"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="60"
        x2="180"
        y2="60"
        stroke="#9cc724"
        strokeWidth="2"
      />
    </svg>
  );
}
