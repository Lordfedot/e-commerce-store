import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto max-w-7xl">
    {children}
  </div>;
};

export default Container;
