import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import "..//..//index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons/faKeyboard";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone";
import { ReactElement, useRef, useState } from "react";
import Keyboard from "../keyboard/keyboard";

function Search(): ReactElement {
  const ref = useRef<HTMLInputElement>(null);
  const [showSearch, setshowSearch] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);
  const [KeyBoard, setKeyBoard] = useState<boolean>(false);
  const [mesage, setMesage] = useState<string>("");

  const ShowValue = (message: string | null): void => {
    console.log(message);
    ref.current?.focus();
  };

  const handleShowKeyBoard = (): void => {
    setKeyBoard(!KeyBoard);
    ref.current?.focus();
  };
  return (
    <div className="flex items-center h-full relative">
      <div
        className=" absolute left-2 h-full w-10 border-solid rounded-l-3xl rounded-r-none flex items-center justify-center
      border border-solid border-slate-300"
        style={{ visibility: !showSearch ? "hidden" : "visible" }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className=" ">
        <nav className="flex ml-20 border-none items-center w-full py-2  h-10 ">
          {/* input */}
          <input
            type="text"
            ref={ref}
            value={mesage}
            placeholder="Tìm Kiếm"
            className=" input w-10/12 border border-slate-300 h-10 absolute outline-none 
        -8 rounded-l-full  leading-8 rounded-l-none
        py-2 pl-4 pr-10  bg-transparent w-8/12 style-none  text-base font-medium left-12 max-w-lg"
            onFocus={() => {
              setshowSearch(true);
            }}
            onBlur={() => {
              setshowSearch(false);
            }}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length > 0) {
                setClose(true);
              } else {
                setClose(false);
              }
            }}
            onChange={(e) => {
              setMesage(e.target.value);
            }}
          />
          {/* keyboad */}
          <button
            className={
              close
                ? "absolute right-56  text-xl "
                : "absolute right-48 right text-xl "
            }
            onClick={handleShowKeyBoard}
          >
            <FontAwesomeIcon icon={faKeyboard} />
          </button>
          {/* close */}
          <button
            className="absolute right-48 ml-6 text-xl "
            style={{ visibility: close ? "visible" : "hidden" }}
            onClick={() => {
              setMesage("");
              setClose(false);
            }}
          >
            X
          </button>
          {/* search */}
          <button
            style={{ borderColor: "#ccc" }}
            className="
                    border-solid  border-r border-y h-10 rounded-r-full
                    absolute right-28 border-solid pl-8 pr-6 "
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </nav>
      </div>
      {/* micro */}
      <button className="hover:bg-slate-300 px-4 h-10 absolute right-10 flex items-center py-4 rounded-full bg-slate-100">
        <FontAwesomeIcon icon={faMicrophone} className="text-lg" />
      </button>
      {/* keyboard */}
      {KeyBoard && (
        <Keyboard onClose={handleShowKeyBoard} TransmittedValue={ShowValue} />
      )}
    </div>
  );
}

export default Search;
