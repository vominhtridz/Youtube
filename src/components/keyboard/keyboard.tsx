import {
  faCircleMinus,
  faHome,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import Draggable from "react-draggable";
//interface
interface Visible {
  onClose: () => void;
  TransmittedValue: (message: string | null) => void | string | null;
}

// function
function Keyboard(
  { onClose }: Visible,
  { TransmittedValue }: Visible
): ReactElement {
  const handleClose = (): void => {
    onClose();
  };
  const HandleShowValue = (
    e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ): void => {
    const value = (e.target as HTMLElement)?.textContent;
    TransmittedValue(value);
  };
  return (
    <div>
      <Draggable>
        <div
          style={{
            width: "540px",
            backgroundColor: "#fff",
          }}
          className="z-50 fixed top-2/3 px-3 py-3 border border-solid  shadow-md border-slate-300 rounded-md"
        >
          <table className="w-full">
            <thead>
              <tr className="select-none flex mb-px justify-between ">
                <td>
                  <span>Tiếng Việt Telex</span>
                </td>
                <td>
                  <p
                    onClick={handleClose}
                    className="mr-2 bg-gray-50 cursor-pointer"
                  >
                    X
                  </p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="flex">
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  `
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  1
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  2
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  3
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  4
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  5
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  6
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  7
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  8
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  9
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  0
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  -
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  =
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-2.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  =
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  <FontAwesomeIcon icon={faCircleMinus} />
                </th>
              </tr>
              <tr className="flex mt-0.5">
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-6 mr-1 py-2"
                ></th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  w
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  e
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  r
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  t
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  y
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  u
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  i
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  o
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  p
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  [
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  ]
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-7 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  \
                </th>
              </tr>
              <tr className="flex mt-0.5">
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 py-px border border-solid border-slate-300 rounded-md mr-1"
                >
                  <FontAwesomeIcon icon={faHome} />
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  a
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  s
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  d
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  f
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  g
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  h
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  j
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  k
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  l
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  ;
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  '
                </th>
              </tr>
              <tr className="flex mt-1">
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 py-px border border-solid border-slate-300 rounded-md mr-1"
                >
                  <FontAwesomeIcon icon={faUpLong} />
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  z
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  x
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  c
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  v
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  b
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  n
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  m
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  ,
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  .
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-3.5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  /
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 text-sm font-normal flex items-center rounded-md mr-1 py-px border border-solid boder-slate-200"
                >
                  <FontAwesomeIcon icon={faUpLong} />
                </th>
              </tr>
              <tr className="flex mt-1">
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 py-1 mr-1 border border-solid border-slate-300 rounded-md "
                >
                  Ctrl + Alt
                </th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-36 py-px border mr-1 border-solid border-slate-300 rounded-md "
                ></th>
                <th
                  onClick={HandleShowValue}
                  className="active:scale-95 bg-slate-100 font-normal select-none hover:shadow-md px-5 py-1  border border-solid border-slate-300 rounded-md "
                >
                  Ctrl + Alt
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Draggable>
    </div>
  );
}

export default Keyboard;
