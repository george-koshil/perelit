interface RightSideWrapperProps {
  children?: React.ReactNode
}

const RightSideWrapper: React.FC<RightSideWrapperProps> = ({  children }) => {
  return (
    <div className="flex items-center gap-[10px] lg:gap-[25px]">
      {children}
    </div>
  );
};

export default RightSideWrapper;