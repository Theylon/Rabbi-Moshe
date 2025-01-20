import type React from "react"

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F5E6D3]">
      <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="star-of-david" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M25,10 L30,20 L40,20 L35,30 L40,40 L30,40 L25,50 L20,40 L10,40 L15,30 L10,20 L20,20 Z"
              fill="none"
              stroke="#8B4513"
              strokeWidth="1"
            />
          </pattern>
          <pattern id="menorah" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30,10 V50 M20,10 V40 H40 V10 M10,10 V30 H50 V10" fill="none" stroke="#8B4513" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star-of-david)" />
        <rect width="100%" height="100%" fill="url(#menorah)" />
        <g className="animate-float">
          <circle cx="10%" cy="20%" r="5" fill="rgba(139, 69, 19, 0.2)" />
          <circle cx="25%" cy="60%" r="7" fill="rgba(139, 69, 19, 0.2)" />
          <circle cx="40%" cy="80%" r="4" fill="rgba(139, 69, 19, 0.2)" />
          <circle cx="60%" cy="15%" r="6" fill="rgba(139, 69, 19, 0.2)" />
          <circle cx="75%" cy="45%" r="5" fill="rgba(139, 69, 19, 0.2)" />
          <circle cx="90%" cy="70%" r="7" fill="rgba(139, 69, 19, 0.2)" />
        </g>
      </svg>
    </div>
  )
}

export default AnimatedBackground

