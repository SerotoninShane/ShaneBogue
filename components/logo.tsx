"use client"

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        {/* Gradient for intersection - smooth blend */}
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#b45309" />
          <stop offset="100%" stopColor="currentColor" />
        </linearGradient>
        
        {/* Clip paths for circles */}
        <clipPath id="leftCircleClip">
          <circle cx="38" cy="50" r="28" />
        </clipPath>
        
        <clipPath id="rightCircleClip">
          <circle cx="62" cy="50" r="28" />
        </clipPath>
        
        {/* Intersection clip - both circles */}
        <clipPath id="intersectionClip">
          <circle cx="38" cy="50" r="28" />
        </clipPath>
      </defs>
      
      {/* Left circle - ginger orange vertical lines */}
      <g clipPath="url(#leftCircleClip)">
        {/* Background shows through gaps */}
        {[14, 22, 30, 38, 46, 54, 62].map((x, i) => (
          <line
            key={`left-${i}`}
            x1={x}
            y1="18"
            x2={x}
            y2="82"
            stroke="#ea580c"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
      </g>
      
      {/* Right circle - foreground vertical lines */}
      <g clipPath="url(#rightCircleClip)">
        {[38, 46, 54, 62, 70, 78, 86].map((x, i) => (
          <line
            key={`right-${i}`}
            x1={x}
            y1="18"
            x2={x}
            y2="82"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="opacity-80"
          />
        ))}
      </g>
      
      {/* Intersection - gradient lines where circles overlap, denser = gradient effect */}
      <g clipPath="url(#leftCircleClip)">
        <g clipPath="url(#rightCircleClip)">
          {/* Denser lines in intersection create gradient blend effect */}
          {[38, 42, 46, 50, 54, 58, 62].map((x, i) => (
            <line
              key={`center-${i}`}
              x1={x}
              y1="18"
              x2={x}
              y2="82"
              stroke="url(#centerGradient)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
        </g>
      </g>
    </svg>
  )
}
