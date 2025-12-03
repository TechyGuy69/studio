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
          style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    
    {/* Clean circle background */}
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="none"
      stroke="hsl(var(--border))"
      strokeWidth="4"
    />

    {/* Open Book */}
    <path
      d="M25 75 Q50 60, 75 75 L 75 30 Q50 45, 25 30 Z"
      fill="hsl(var(--primary))"
      opacity="0.1"
    />
    <path
      d="M25 75 Q50 60, 75 75"
      stroke="hsl(var(--primary))"
      strokeWidth="3.5"
      fill="none"
    />
    <path
      d="M50 35 V 72"
      stroke="hsl(var(--primary))"
      strokeWidth="3.5"
      fill="none"
    />

    {/* Sprout/Leaf */}
    <g transform="translate(-5, -8)">
        <path
            d="M55 55 C 55 45, 65 45, 65 55 C 65 65, 55 65, 55 55 Z"
            fill="url(#grad1)"
        />
        <path
            d="M60 55 C 60 50, 70 50, 70 60"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            fill="none"
        />
    </g>
  </svg>
);
