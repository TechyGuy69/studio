export const BioMyDreamLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>

    {/* Outer Circle - with a slight 3D effect */}
    <circle
      cx="50"
      cy="50"
      r="42"
      fill="none"
      stroke="hsl(160, 20%, 35%)"
      strokeWidth="3.5"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="hsl(160, 25%, 25%)"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* DNA */}
    <g transform="scale(0.4) translate(55, -20)">
      <path
        d="M20 30 C 60 40, 60 70, 20 80"
        stroke="hsl(165, 42%, 40%)"
        strokeWidth="7"
        fill="none"
      />
      <path
        d="M40 30 C 0 40, 0 70, 40 80"
        stroke="hsl(165, 42%, 40%)"
        strokeWidth="7"
        fill="none"
      />
      <line x1="30" y1="36" x2="30" y2="40" strokeWidth="6" stroke="hsl(160, 25%, 28%)" />
      <line x1="30" y1="48" x2="30" y2="52" strokeWidth="6" stroke="hsl(160, 25%, 28%)" />
      <line x1="30" y1="60" x2="30" y2="64" strokeWidth="6" stroke="hsl(160, 25%, 28%)" />
      <line x1="30" y1="72" x2="30" y2="76" strokeWidth="6" stroke="hsl(160, 25%, 28%)" />
    </g>

    {/* Brain */}
    <g transform="scale(0.38) translate(95, 10)">
      <path
        d="M50 10 C 30 10, 20 30, 30 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 70 50 C 80 30, 70 10, 50 10 Z"
        fill="hsl(160, 30%, 30%)"
      />
      <path
        d="M50 15 C 40 25, 40 40, 50 50"
        stroke="hsl(160, 20%, 45%)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M50 90 C 60 80, 60 65, 50 55"
        stroke="hsl(160, 20%, 45%)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M30 50 C 40 40, 40 60, 30 70"
        stroke="hsl(160, 20%, 45%)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M70 50 C 60 40, 60 60, 70 70"
        stroke="hsl(160, 20%, 45%)"
        strokeWidth="3"
        fill="none"
      />
       {/* Star */}
      <path
          d="M85 18 l2 5 h5 l-4 3 1.5 5 -4-3 -4 3 1.5 -5 -4 -3 h5z"
          fill="hsl(165, 42%, 40%)"
      />
    </g>
    
    {/* Open Book */}
    <path
      d="M10 88 Q50 60, 90 88 L 95 78 Q50 50, 5 78 Z"
      fill="hsl(0, 0%, 25%)"
    />
    <path
      d="M12 86 Q50 63, 88 86"
      fill="none"
      stroke="hsl(0, 0%, 40%)"
      strokeWidth="1.5"
    />
    <path
      d="M15 83 Q50 66, 85 83"
      fill="none"
      stroke="hsl(0, 0%, 40%)"
      strokeWidth="1.2"
    />
     <path
      d="M18 80 Q50 69, 82 80"
      fill="none"
      stroke="hsl(0, 0%, 40%)"
      strokeWidth="1"
    />
    
    {/* Plant */}
    <g transform="translate(4, 5)">
      <path
        d="M45 78 C 40 68, 50 58, 50 48"
        stroke="hsl(80, 30%, 65%)"
        strokeWidth="3.5"
        fill="none"
      />
      {/* Leaves */}
      <path d="M50 48 C 50 53, 42 50, 40 46" fill="hsl(80, 30%, 65%)" />
      <path d="M50 48 C 50 53, 58 50, 60 46" fill="hsl(80, 30%, 65%)" />
      <path d="M47 58 C 47 63, 39 60, 37 56" fill="hsl(80, 30%, 65%)" />
      <path d="M53 58 C 53 63, 61 60, 63 56" fill="hsl(80, 30%, 65%)" />

      {/* Roots */}
      <path d="M45 78 C 43 83, 41 83, 39 80" stroke="hsl(80, 30%, 65%)" strokeWidth="2" fill="none" />
      <path d="M45 78 C 45 84, 43 84, 43 81" stroke="hsl(80, 30%, 65%)" strokeWidth="2" fill="none" />
      <path d="M45 78 C 47 84, 48 84, 47 80" stroke="hsl(80, 30%, 65%)" strokeWidth="2" fill="none" />
    </g>
  </svg>
);
