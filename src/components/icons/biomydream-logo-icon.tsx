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
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Outer Circle */}
    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#grad1)" strokeWidth="3" />

    {/* Star */}
    <path
      d="M78 27 l2 5 h5 l-4 3 1.5 5 -4-3 -4 3 1.5 -5 -4 -3 h5z"
      fill="url(#grad1)"
    />

    {/* Open Book */}
    <path
      d="M20 80 Q50 65, 80 80 L 85 70 Q50 55, 15 70 Z"
      fill="hsl(var(--card))"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
    />
    <path
      d="M22 78 Q50 68, 78 78"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.5"
    />
    <path
      d="M24 76 Q50 71, 76 76"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.5"
    />
     <path
      d="M26 74 Q50 74, 74 74"
      fill="none"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.5"
    />


    {/* Plant */}
    <g transform="translate(0, 5)">
        <path d="M42 70 C 40 60, 50 50, 50 40" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M50 40 C 50 45, 45 42, 43 38" fill="hsl(var(--primary))" />
        <path d="M50 40 C 50 45, 55 42, 57 38" fill="hsl(var(--primary))" />
        
        {/* Roots */}
        <path d="M42 70 C 40 75, 38 75, 36 72" stroke="hsl(var(--primary-foreground))" strokeWidth="1" fill="none" />
        <path d="M42 70 C 42 76, 40 76, 40 73" stroke="hsl(var(--primary-foreground))" strokeWidth="1" fill="none" />
        <path d="M42 70 C 44 76, 45 76, 44 72" stroke="hsl(var(--primary-foreground))" strokeWidth="1" fill="none" />
    </g>


    {/* DNA */}
    <g transform="scale(0.3) translate(30, 80)">
      <path d="M20 10 C 40 20, 40 40, 20 50" stroke="url(#grad1)" strokeWidth="4" fill="none" />
      <path d="M30 10 C 10 20, 10 40, 30 50" stroke="url(#grad1)" strokeWidth="4" fill="none" />
      <line x1="25" y1="12" x2="25" y2="18" stroke="hsl(var(--foreground))" strokeWidth="2" />
      <line x1="25" y1="22" x2="25" y2="28" stroke="hsl(var(--foreground))" strokeWidth="2" />
      <line x1="25" y1="32" x2="25" y2="38" stroke="hsl(var(--foreground))" strokeWidth="2" />
      <line x1="25" y1="42" x2="25" y2="48" stroke="hsl(var(--foreground))" strokeWidth="2" />
    </g>

    {/* Brain */}
    <g transform="scale(0.35) translate(110, 60)">
      <path d="M50 10 C 30 10, 20 30, 30 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 70 50 C 80 30, 70 10, 50 10 Z" fill="hsl(var(--primary))" opacity="0.8" />
      <path d="M50 15 C 40 25, 40 40, 50 50" stroke="hsl(var(--primary-foreground))" strokeWidth="2" fill="none" />
      <path d="M50 90 C 60 80, 60 65, 50 55" stroke="hsl(var(--primary-foreground))" strokeWidth="2" fill="none" />
      <path d="M30 50 C 40 40, 40 60, 30 70" stroke="hsl(var(--primary-foreground))" strokeWidth="2" fill="none" />
      <path d="M70 50 C 60 40, 60 60, 70 70" stroke="hsl(var(--primary-foreground))" strokeWidth="2" fill="none" />
    </g>
  </svg>
);
