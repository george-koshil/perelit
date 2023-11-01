"use client";

interface XCircleProps {
  fill?: string;
  stroke: string;
}

const XCircle: React.FC<XCircleProps> = ({
  fill = "none",
  stroke = "#D1D2DF",
}) => {
  return (
    <svg
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 48C39.9411 48 48 39.9411 48 30C48 20.0589 39.9411 12 30 12C20.0589 12 12 20.0589 12 30C12 39.9411 20.0589 48 30 48Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 25L25 36"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 25L35 36"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XCircle;
