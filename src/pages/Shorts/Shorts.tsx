import {
  faEllipsis,
  faMessage,
  faPlay,
  faShare,
  faThumbsDown,
  faThumbsUp,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import "..//..//css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "..//..//images/logo_ytb.png";
import video from "..//..//images/video1.mp4";
const Shorts = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex relative  Shorts-video">
        <figure className=" w-80 h-full">
          <span className="flex absolute top-10 justify-between w-80 text-neutral-50">
            <FontAwesomeIcon icon={faPlay} className="ml-5 text-lg" />
            <FontAwesomeIcon icon={faVolumeUp} className="mr-5 text-lg " />
          </span>
          <video src={video} className="rounded-lg h-full w-80"></video>
          <section className="flex flex-col absolute bottom-0 w-9/12 ml-3 mb-8 text-neutral-50 left-0">
            <p className="text-base font-medium uppercase">
              Mình chọn loại con trai nào ? #Shortsasdasdasdasình chọn loại con
              trai nào ? #Shortsasdasdasd
            </p>
            <div className="flex text-sm cursor-pointer justify-between items-center">
              <span className="flex justify-between items-center">
                <img src={img} alt="video fun" className="w-10 mr-2" />
                <p>@jennyhuynh</p>
              </span>
              <button className="hover:bg-slate-400 rounded-full py-2 px-4">
                Đăng ký
              </button>
            </div>
          </section>
        </figure>
        {/* like dislike */}
        <section className="mt-auto mb-10 flex flex-col justify-center ml-3">
          <div className="flex flex-col items-center justify-center">
            <button className="py-4 px-4 mb-2 flex items-center justify-center hover:bg-slate-300 bg-slate-100 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faThumbsUp} />
            </button>
            <span className="mb-3 text-sm">91N</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="py-4 px-4 mb-2 flex-col flex items-center justify-center hover:bg-slate-300 bg-slate-100 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faThumbsDown} />
            </button>
            <span className="mb-3 text-sm">1K</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="py-4 px-4 mb-2 flex items-center justify-center hover:bg-slate-300 bg-slate-100 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faMessage} />
            </button>
            <span className="mb-3 text-sm">230</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="py-4 px-4 mb-2 flex items-center justify-center hover:bg-slate-300 bg-slate-100 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faShare} />
            </button>
            <span className="mb-3 text-sm">Chia sẻ</span>
          </div>
          <div>
            <button className="py-4 px-4 mb-3 flex items-center justify-center hover:bg-slate-300 bg-slate-100 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faEllipsis} />
            </button>
          </div>
          <img src={img} alt="img" className="rounded-lg w-10 m-auto" />
        </section>
      </div>
    </div>
  );
};
export default Shorts;
