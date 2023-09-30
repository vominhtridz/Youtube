import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "..//..//index.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
function AccountItem() {
  return (
    <div className="flex items-center mr-4">
      {/* menu */}
      <button
        className="menu flex items-center justify-center w-10 active:transition
         focus:duration-300 focus:ease-in-out mr-4
        h-10 rounded-full  active:bg-slate-200 active:border-slate-400 active:border-2 border-solid"
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      {/* account */}
      <button
        className="sign flex border-solid border text-base font-medium text-sky-600
          rounded-full hover:bg-sky-100 px-4 py-2 "
      >
        <div className="mr-1">
          <FontAwesomeIcon icon={faUser} />
        </div>
        Đăng Nhập
      </button>
    </div>
  );
}

export default AccountItem;
