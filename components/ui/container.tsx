interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className=" lg:max-auto lg:max-w-8xl">{children}</div>;
};

export default Container;
