"use client";

interface UserBusinesProps {
  fill?: string;
  stroke: string;
}

const UserBusines: React.FC<UserBusinesProps> = ({
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
        d="M30 25.5C35.5228 25.5 40 21.0228 40 15.5C40 9.97715 35.5228 5.5 30 5.5C24.4772 5.5 20 9.97715 20 15.5C20 21.0228 24.4772 25.5 30 25.5Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M52.5 55.5C52.5 43.0738 42.4262 33 30 33C17.5738 33 7.5 43.0738 7.5 55.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 55.5L35 49.25L30 33L25 49.25L30 55.5Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserBusines;
