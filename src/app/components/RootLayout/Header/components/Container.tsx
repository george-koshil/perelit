interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <header className="flex items-center justify-between px-[10px] py-[20px] md:px-[22px] md:py-[25px] xl:px-[75px] xl:py-[25px] max-w-[1440px] mx-auto">
      {children}
    </header>
  );
};

export default Container;