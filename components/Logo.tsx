
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 220 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Fake Company Ltd. Logo"
    >
      <style>
        {`
          .fcl-text { 
            font-family: 'Montserrat', sans-serif; 
            font-size: 60px; 
            font-weight: 700; 
            fill: #F5F5F5; 
            text-anchor: middle;
            letter-spacing: 0.1em;
          }
          .fcl-bar { 
            fill: #F5F5F5; 
          }
        `}
      </style>
      <text x="110" y="45" className="fcl-text">FCL</text>
      <rect x="10" y="70" width="200" height="15" className="fcl-bar" />
    </svg>
  );
};

export default Logo;
