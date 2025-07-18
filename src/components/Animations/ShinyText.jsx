import React, { useEffect } from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  useEffect(() => {
    const styleId = 'shiny-text-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .shiny-text {
          color: #b5b5b5a4;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          animation: shine 5s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }

        .shiny-text.disabled {
          animation: none;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
