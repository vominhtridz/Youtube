import video from "..//..//images/video1.mp4";
import img from ".//..//..//images/logo_real-png.png";

const Home = (): React.ReactElement => {
  return (
    <div>
      <main>
        {/* header */}
        <header>
          <ul className="flex items-center">
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Tất cả</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Trò chơi</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Trực tiếp</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Âm Nhạc</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Tin Tức </a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Trò Chơi hành động phiêu lưu</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Nấu Ăn</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Bóng đá</a>
            </li>
            <li className="py-1 px-3 rounded-md bg-slate-200 text-base ml-2">
              <a href="">Mới tải lên gần đây</a>
            </li>
          </ul>
        </header>
        {/* videooooooooooo */}
        <section className="mt-5 flex flex-wrap w-full ">
          <div className="w-1/3 rounded-md  overflow-hidden h-72 pr-4 mb-5 ">
            <video
              src={video}
              className="w-full h-40 shadow-lg rounded-lg"
              controls
            ></video>
            <section className="flex ">
              <img
                src={img}
                alt=""
                className="w-11 h-11 mt-2 ml-2 rounded-full "
              />
              <div className="flex flex-col ml-4 mt-2 font-semibold h-full  ">
                <h4 className="text-lg">Video Thú vị</h4>
                <span className="font-normal">Văn tùng</span>
                <nav className="flex font-normal">
                  <p>180N lượt xem</p> <p>1 năm trước</p>
                </nav>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
