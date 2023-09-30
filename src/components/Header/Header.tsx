import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo_real-png.png";
import AccountItem from "./Account";
import { Link } from "react-router-dom";
import "../../css/App.css";
import "../../index.css";
import Search from "./Search";
import { useState } from "react";

interface BtnClick  {
  onclickBtn:(toggle:boolean)=> void
}

const Header = ({ onclickBtn }: BtnClick): React.ReactElement => {
  const [toggle, setToggle] = useState<boolean>(true);

  const CurrentStatus = ():void => {
    setToggle(!toggle)
    onclickBtn(toggle);
  };

  return (
    <div className="Header flex max-h-14 justify-between">
      {/* LOGO */}
      <div className="contain-logo flex aligns-center ml-2">
        <button
          className="active:bg-slate-200 mx-2 my-2 px-3 active:transition
         focus:duration-300 focus:ease-in-out flex items-center rounded-full justify-center"
          onClick={CurrentStatus}
        >
          <FontAwesomeIcon icon={faBars} className="" />
        </button>
        <Link className="logo flex w-40" to="/">
          {/* ICON */}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* SEARCH */}
      <div className="wrapper-input h-full container sm w-2/4 mx-auto my-auto">
        <Search />
      </div>
      {/* ACCOUNT */}
      <div className="account my-auto">
        <AccountItem />
      </div>
    </div>
  );
};

export default Header;
