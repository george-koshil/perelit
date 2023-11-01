interface LeftSideWrapperProps {
  children?: React.ReactNode
}

const LeftSideWrapper: React.FC<LeftSideWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center">
      {children}
    </div>
  );
};

export default LeftSideWrapper;