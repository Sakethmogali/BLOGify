import PreviewElement from "../Components/PreviewElement";
import { useAllbogs } from "../Hooks/getBlogs";
import { Blog } from "../Hooks/getBlogs";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";


export default function AllBlogs() {
  const { loading, Listofblogs } = useAllbogs();
  const navigate = useNavigate();
  (localStorage.getItem('token') == undefined) && navigate('/signin')

  return (
    <>
      {
        (loading) ? (<Loader />) : (
          <>
            <Header Add={1} AddBlog={() => { }} />
            <div className="w-[60%] mx-auto ">
              {Listofblogs.map((blog: Blog) => {
                return <PreviewElement title={blog?.title} key={blog?.id} content={blog?.content} colour={blog?.author?.colour || "bg-"} Author={blog?.author?.name || "Anynomous"}
                  id={blog?.id} published_date={blog.published_date} />
              })}
            </div>
            {/* <Profileview/> */}
          </>
        )}
    </>
  );
}
