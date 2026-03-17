interface SVGDividerProps {
  variant?: "dark-to-light" | "light-to-dark";
  className?: string;
}

const SVGDivider = ({ variant = "dark-to-light", className = "" }: SVGDividerProps) => {
  const fill = variant === "dark-to-light" 
    ? "hsl(207, 38%, 10%)" 
    : "hsl(40, 33%, 95%)";

  return (
    <div className={`relative -mt-1 ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        className="w-full h-[40px] sm:h-[60px] block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default SVGDivider;
