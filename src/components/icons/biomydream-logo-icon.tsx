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

    {/* Outer Circle */}
    <circle
      cx="50"
      cy="50"
      r="42"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="3"
    />

    {/* DNA */}
    <g transform="scale(0.45) translate(48, -15)">
      <path
        d="M20 30 C 60 40, 60 70, 20 80"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M40 30 C 0 40, 0 70, 40 80"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        fill="none"
      />
      <line x1="30" y1="36" x2="30" y2="40" strokeWidth="4" stroke="hsl(var(--primary-foreground))" />
      <line x1="30" y1="48" x2="30" y2="52" strokeWidth="4" stroke="hsl(var(--primary-foreground))" />
      <line x1="30" y1="60" x2="30" y2="64" strokeWidth="4" stroke="hsl(var(--primary-foreground))" />
      <line x1="30" y1="72" x2="30" y2="76" strokeWidth="4" stroke="hsl(var(--primary-foreground))" />
    </g>

    {/* Brain */}
    <g transform="scale(0.38) translate(100, 15)">
      <path
        d="M50 10 C 30 10, 20 30, 30 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 70 50 C 80 30, 70 10, 50 10 Z"
        fill="hsl(var(--primary))"
        opacity="0.9"
      />
      <path
        d="M50 15 C 40 25, 40 40, 50 50"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M50 90 C 60 80, 60 65, 50 55"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M30 50 C 40 40, 40 60, 30 70"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M70 50 C 60 40, 60 60, 70 70"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
       {/* Star */}
      <path
          d="M85 18 l2 5 h5 l-4 3 1.5 5 -4-3 -4 3 1.5 -5 -4 -3 h5z"
          fill="url(#grad1)"
      />
    </g>
    
    {/* Open Book */}
    <path
      d="M10 85 Q50 60, 90 85 L 95 75 Q50 50, 5 75 Z"
      fill="hsl(var(--foreground))"
      stroke="hsl(var(--foreground))"
      strokeWidth="1"
      opacity="0.8"
    />
    <path
      d="M12 83 Q50 63, 88 83"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="1"
    />
    <path
      d="M15 81 Q50 66, 85 81"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.8"
    />
     <path
      d="M18 79 Q50 69, 82 79"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.6"
    />
    
    {/* Plant */}
    <g transform="translate(4, 5)">
      <path
        d="M45 75 C 40 65, 50 55, 50 45"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        fill="none"
      />
      {/* Leaves */}
      <path d="M50 45 C 50 50, 42 47, 40 43" fill="hsl(var(--primary))" />
      <path d="M50 45 C 50 50, 58 47, 60 43" fill="hsl(var(--primary))" />
      <path d="M47 55 C 47 60, 39 57, 37 53" fill="hsl(var(--primary))" />
      <path d="M53 55 C 53 60, 61 57, 63 53" fill="hsl(var(--primary))" />

      {/* Roots */}
      <path d="M45 75 C 43 80, 41 80, 39 77" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <path d="M45 75 C 45 81, 43 81, 43 78" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <path d="M45 75 C 47 81, 48 81, 47 77" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);
