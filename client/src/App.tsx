import { createBrowserRouter } from "react-router-dom"
import ReadBlog from "./Pages/ReadBlog";
import Auth from "./Pages/Auth";
import AllBlogs from "./Pages/AllBlogs";
import NewBlog from "./Pages/NewBlog";
import MainPage from "./Pages/MainPage";

const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<MainPage/>
  },
  {
    path:"/signup",
    element:<Auth type="signup"/>
  },
  {
    path:"/signin",
    element:<Auth type="signin"/>
  },
  {
    path:"/blogs",
    element:<AllBlogs/>
  },
  {
    path:"/blog/New",
    element:<NewBlog/>
  },
  {
    path:"/blog/:blogId",
    element:<ReadBlog/>
  }
])
export default Approuter;
