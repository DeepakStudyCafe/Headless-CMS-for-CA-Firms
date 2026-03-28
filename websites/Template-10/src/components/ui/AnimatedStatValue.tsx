import { useMemo, type RefObject } from "react";
import { useCountUp } from "@/hooks/useCountUp";

type AnimatedStatValueProps = {
  value: string | number | null | undefined;
  className?: string;
  duration?: number;
};

type ParsedCounter = {
  isAnimatable: boolean;
  text: string;
  end: number;
  prefix: string;
  suffix: string;
  decimals: number;
  formatThousands: boolean;
};

function parseCounterValue(value: string | number | null | undefined): ParsedCounter {
  const text = String(value ?? "").trim();
  const match = text.match(/^([^0-9-]*)(-?\d[\d,]*(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      isAnimatable: false,
      text,
      end: 0,
      prefix: "",
      suffix: "",
      decimals: 0,
      formatThousands: false,
    };
  }

  const numberToken = match[2];
  const end = Number(numberToken.replace(/,/g, ""));

  if (!Number.isFinite(end)) {
    return {
      isAnimatable: false,
      text,
      end: 0,
      prefix: "",
      suffix: "",
      decimals: 0,
      formatThousands: false,
    };
  }

  const decimalPart = numberToken.split(".")[1] || "";

  return {
    isAnimatable: true,
    text,
    end,
    prefix: match[1] || "",
    suffix: match[3] || "",
    decimals: decimalPart.length,
    formatThousands: numberToken.includes(","),
  };
}

export default function AnimatedStatValue({
  value,
  className,
  duration = 1800,
}: AnimatedStatValueProps) {
  const parsed = useMemo(() => parseCounterValue(value), [value]);

  const { ref, display } = useCountUp({
    end: parsed.end,
    duration,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
    decimals: parsed.decimals,
    formatThousands: parsed.formatThousands,
  });

  if (!parsed.isAnimatable) {
    return <span className={className}>{parsed.text}</span>;
  }

  return (
    <span ref={ref as RefObject<HTMLSpanElement>} className={className}>
      {display}
    </span>
  );
}
