import { useParams } from "react-router-dom"
import useblogById from "../Hooks/getBlogwithId";
import ViewBlog from "../Components/ViewBlog";
import Header from "../Components/Header";
import Loader from "../Components/Loader";

export default function ReadBlog() {
    const {blogId} = useParams();
    const status= useblogById(blogId ||"");
    return(
        <div>
       <Header Add={0} AddBlog={()=>{}}/> 
        {status.loading?(<Loader/>):(<ViewBlog blog={status.blog}/>)} 
        </div>
    );
}
