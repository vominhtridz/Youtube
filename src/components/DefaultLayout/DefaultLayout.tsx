import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { ReactElement, ReactNode, useState } from "react";
import "..//..//index.css";
type ChildrenType = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: ChildrenType): ReactElement => {
  const [width, setWidth] = useState<string>("18%");
  const handleClick = (e: boolean): void => {
    if (e) {
      setWidth("8%");
    } else {
      setWidth("18%");
    }
  };
  return (
    <div className="wrapper">
      <Header onclickBtn={handleClick} />
      <div className="body mt-2">
        <Sidebar width={width} />
        <div className="content mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
