import Home from "..//pages/Home/Home";
import Library from "..//pages/Library/Library";
import Shorts from "..//pages/Shorts/Shorts";
import Subscriper from "..//pages/Subscriper/Subscriper";
import Video_liked from "..//pages/Video_liked/Video_liked";
import Viewed from "..//pages/Viewed/Viewed";
import Watch_it_late from "..//pages/Watch_it_late/Watch_it_late";
import Games from "../pages/Games/Games";
//public
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Game", component: Games },
  { path: "/Library", component: Library },
  { path: "/Shorts", component: Shorts },
  { path: "/Subscriber", component: Subscriper },
  { path: "/Video_liked", component: Video_liked },
  { path: "/Viewed", component: Viewed },
  { path: "/Watch_it_late", component: Watch_it_late },
];

//private
const privateRoutes: object[] = []; // Đảm bảo kiểu dữ liệu của privateRoutes là một mảng các đối tượng

export { privateRoutes, publicRoutes };
