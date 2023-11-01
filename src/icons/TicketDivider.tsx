interface TicketDividerProps {}

const TicketDivider: React.FC<TicketDividerProps> = ({}) => {
  return (
    <svg
      width="20"
      height="175"
      viewBox="0 0 20 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 0V175C20 169.477 15.5228 165 10 165C4.47715 165 0 169.477 0 175V0C0 5.52285 4.47715 10 10 10C15.5228 10 20 5.52285 20 0Z"
        fill="white"
      />
      <path d="M10 18L10 162" stroke="#D1D2DF" stroke-dasharray="1 2" />
    </svg>
  );
};

export default TicketDivider;
