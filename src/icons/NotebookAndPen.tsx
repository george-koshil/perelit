"use client";

interface NotebookAndPenProps {
  fill?: string;
  stroke: string;
}

const NotebookAndPen: React.FC<NotebookAndPenProps> = ({
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
        d="M17.4 49V12M51 12H42.6M51 12V44.8889L46.8 49L42.6 44.8889V12M51 12V28.4444M42.6 12V28.4444M42.6 18.1667H51M9 12V49H36.3V12H9Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NotebookAndPen;
