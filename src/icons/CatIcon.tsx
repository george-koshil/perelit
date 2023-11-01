"use client";

interface CatIconProps {
  fill?: string;
  stroke: string;
}

const CatIcon: React.FC<CatIconProps> = ({
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
        d="M48 32.5606C48 41.3976 39.941 48.5606 30 48.5606C20.059 48.5606 12 41.3976 12 32.5606M21 18.7005C23.648 17.3405 26.721 16.5605 30 16.5605C33.279 16.5605 36.352 17.3405 39 18.7005"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 32.5604V15.0484C12 13.3174 14.05 12.4034 15.337 13.5614L21 18.6534M48 32.5604V15.0484C48 13.3174 45.95 12.4034 44.663 13.5614L39 18.6534"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36 30.5605C37.1046 30.5605 38 29.6651 38 28.5605C38 27.456 37.1046 26.5605 36 26.5605C34.8954 26.5605 34 27.456 34 28.5605C34 29.6651 34.8954 30.5605 36 30.5605Z"
        fill={fill}
      />
      <path
        d="M24 30.5605C25.1046 30.5605 26 29.6651 26 28.5605C26 27.456 25.1046 26.5605 24 26.5605C22.8954 26.5605 22 27.456 22 28.5605C22 29.6651 22.8954 30.5605 24 30.5605Z"
        fill={fill}
      />
      <path
        d="M30 36.5605C31.1046 36.5605 32 35.6651 32 34.5605C32 33.456 31.1046 32.5605 30 32.5605C28.8954 32.5605 28 33.456 28 34.5605C28 35.6651 28.8954 36.5605 30 36.5605Z"
        fill={fill}
      />
      <path
        d="M22 36.5605L10 37.5605M25 41.5605L13 47.5605M38 36.5605L50 37.5605M35 41.5605L47 47.5605"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CatIcon;
