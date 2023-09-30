import "@fortawesome/fontawesome-svg-core";
import {
  faCircleExclamation,
  faCirclePlay,
  faClockFour,
  faDisplay,
  faFire,
  faFlag,
  faGamepad,
  faGear,
  faHome,
  faMusic,
  faNewspaper,
  faPassport,
  faPlay,
  faPlusCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface iprop {
  width: string;
}

const Sidebar = ({ width }: iprop): React.ReactElement => {
  const widthCurrent = width === "18%";
  const currentStyle =
    "flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md whitespace-nowrap";
  return (
    <div className="pr-8 transition-all duration-500" style={{ width: width }}>
      <aside>
        {/* item1 */}
        <section
          className={
            !widthCurrent ? "flex flex-col mb-4" : "flex flex-col ml-3 mb-4"
          }
        >
          <Link
            className={
              !widthCurrent
                ? currentStyle + " text-xs w-full flex-col"
                : currentStyle
            }
            to="/"
          >
            <FontAwesomeIcon
              className={widthCurrent ? "pr-5 text-lg" : "text-lg mb-2"}
              icon={faHome}
            />
            Trang Chủ
          </Link>
          <Link
            className={
              !widthCurrent
                ? currentStyle + " text-xs w-full flex-col"
                : currentStyle
            }
            to="/Shorts"
          >
            <FontAwesomeIcon
              className={widthCurrent ? "pr-5 text-lg" : "text-lg mb-2"}
              icon={faCirclePlay}
            />
            Shorts
          </Link>
          <Link
            className={
              !widthCurrent
                ? currentStyle + " text-xs w-full flex-col"
                : currentStyle
            }
            to="/Subscriber"
          >
            <FontAwesomeIcon
              className={widthCurrent ? "pr-5 text-lg" : "text-lg mb-2"}
              icon={faPlay}
            />
            Kênh Đăng kí
          </Link>
        </section>
        {widthCurrent && <hr />}
        {/* item2 */}
        <section
          className={
            !widthCurrent ? "flex flex-col mb-4" : "flex flex-col ml-3 mb-4"
          }
        >
          <Link
            className={
              !widthCurrent
                ? currentStyle + " text-xs w-full flex-col"
                : currentStyle
            }
            to="/Library"
          >
            <FontAwesomeIcon
              className={widthCurrent ? "pr-5 text-lg" : "text-lg mb-2"}
              icon={faDisplay}
            />{" "}
            Thư Viện
          </Link>
          <Link
            className={
              !widthCurrent
                ? currentStyle + " text-xs w-full flex-col"
                : currentStyle
            }
            to="/Viewed"
          >
            <FontAwesomeIcon
              className={widthCurrent ? "pr-5 text-lg" : "text-lg mb-2"}
              icon={faClockFour}
            />{" "}
            Video đã xem
          </Link>
        </section>
        {widthCurrent && <hr />}
        {/* item3 */}
        <div className="ml-3 my-3">
          <ul>
            <li>
              {widthCurrent && (
                <Link
                  className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
                  to="/"
                >
                  <FontAwesomeIcon className="pr-5 text-lg" icon={faFire} />
                  Thịnh hành
                </Link>
              )}
            </li>
            <li>
              {widthCurrent && (
                <Link
                  className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
                  to="/"
                >
                  <FontAwesomeIcon className="pr-5 text-lg" icon={faMusic} />
                  Âm nhạc
                </Link>
              )}
            </li>
            <li>
              {widthCurrent && (
                <Link
                  className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
                  to="/Games"
                >
                  <FontAwesomeIcon className="pr-5 text-lg" icon={faGamepad} />
                  Trò chơi
                </Link>
              )}
            </li>
            <li>
              {widthCurrent && (
                <Link
                  className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
                  to="/"
                >
                  <FontAwesomeIcon
                    className="pr-5 text-lg"
                    icon={faNewspaper}
                  />
                  Tin tức
                </Link>
              )}
            </li>
            <li>
              {widthCurrent && (
                <Link
                  className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
                  to="/"
                >
                  <FontAwesomeIcon className="pr-5 text-lg" icon={faPassport} />
                  Thể thao
                </Link>
              )}
            </li>
          </ul>
        </div>
        {widthCurrent && <hr />}
        {/* item 4 */}
        <section className="ml-4 my-2">
          {widthCurrent && (
            <Link
              to="/"
              className="flex items-center hover:bg-slate-100 px-2 py-2 rounded-md"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faPlusCircle} />{" "}
              Xem qua các kênh
            </Link>
          )}
        </section>
        {widthCurrent && <hr />}
        {/* item 5 */}
        <div className="flex flex-col ml-3 my-3">
          {widthCurrent && (
            <h5 className="ml-3 py-0 text-lg">Dịch vụ các YouTube</h5>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md mt-2"
              to="#"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faCirclePlay} />
              YouTube Predium
            </Link>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="#"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faCirclePlay} />
              YouTube Music
            </Link>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="#"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faCirclePlay} />
              YouTube Kid
            </Link>
          )}
        </div>
        {widthCurrent && <hr />}
        {/* item5 */}
        <div className="flex ml-3 py-3 flex-col">
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="/"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faGear} />
              Cài đặt
            </Link>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="/"
            >
              <FontAwesomeIcon className="pr-5 text-lg" icon={faFlag} />
              Nhật kí báo cáo
            </Link>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="/"
            >
              <FontAwesomeIcon
                className="pr-5 text-lg"
                icon={faQuestionCircle}
              />
              Trợ giúp
            </Link>
          )}
          {widthCurrent && (
            <Link
              className="flex items-center text-base py-1.5 hover:bg-slate-100 px-3.5 rounded-md"
              to="/"
            >
              <FontAwesomeIcon
                className="pr-5 text-lg"
                icon={faCircleExclamation}
              />
              Gửi ý kiến phản hồi
            </Link>
          )}
        </div>
        {widthCurrent && <hr />}
        {/* item 6 */}
        <div className="ml-6 my-3 " style={{ maxWidth: 200 }}>
          <section className="mb-3">
            <div>
              <div className="flex">
                {widthCurrent && (
                  <Link
                    className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                    to="/"
                  >
                    Giới thiệu
                  </Link>
                )}
                {widthCurrent && (
                  <Link
                    className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                    to="/"
                  >
                    Báo chí
                  </Link>
                )}
                {widthCurrent && (
                  <Link
                    className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                    to="/"
                  >
                    bản quyền
                  </Link>
                )}
              </div>
              {widthCurrent && (
                <Link
                  className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                  to="/"
                >
                  Liên hệ với chúng tôi
                </Link>
              )}
              <div className="flex">
                {widthCurrent && (
                  <Link
                    className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                    to="/"
                  >
                    Người sáng tạo
                  </Link>
                )}
                {widthCurrent && (
                  <Link
                    className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                    to="/"
                  >
                    Quảng cáo
                  </Link>
                )}
              </div>
              {widthCurrent && (
                <Link
                  className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                  to="/"
                >
                  Nhà phát triển
                </Link>
              )}
            </div>
          </section>
          <section className="flex flex-col">
            <div className="flex">
              {widthCurrent && (
                <Link
                  className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                  to="/"
                >
                  Điều khoản
                </Link>
              )}
              {widthCurrent && (
                <Link
                  className="text-sm text-slate-800  tracking-tighter font-semibold"
                  to="/"
                >
                  Quyền riêng tư
                </Link>
              )}
            </div>
            {}
            {widthCurrent && (
              <Link
                className="text-sm text-slate-800 pr-2 grow tracking-tighter font-semibold"
                to="/"
              >
                Chính sách và an toàn
              </Link>
            )}
            {widthCurrent && (
              <Link
                className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                to="/"
              >
                Cách YouTube hoạt động
              </Link>
            )}
            {widthCurrent && (
              <Link
                className="text-sm text-slate-800 pr-2 tracking-tighter font-semibold"
                to="/"
              >
                Thử các tính năng mới
              </Link>
            )}
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
