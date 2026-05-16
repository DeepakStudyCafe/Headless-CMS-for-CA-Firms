interface SectionDividerProps {
  from?: "paper" | "dark" | "white";
  to?: "paper" | "dark" | "white";
  flip?: boolean;
}

const fills: Record<string, string> = {
  paper: "%23F9F8F6",
  dark: "%231C1C1E",
  white: "%23FFFFFF",
};

export default function SectionDivider({ to = "paper", flip = false }: SectionDividerProps) {
  const fill = fills[to];
  return (
    <div
      className={`w-full h-[40px] md:h-[60px] -mb-px relative z-10 ${flip ? "rotate-180" : ""}`}
      style={{
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 360 0 720 30 Q 1080 60 1440 30 L1440 60 L0 60 Z' fill='${fill}'/%3E%3C/svg%3E") no-repeat center`,
        backgroundSize: "cover",
      }}
    />
  );
}
