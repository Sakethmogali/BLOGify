import Avatar from "./Avatar";
import Blogfooter from "./Blogfooter";
import { months } from "../config";

export default function ViewBlog({blog}:{blog:any}) {
  const date:Date=new Date(blog.published_date);
  return (
    <div className="w-[90vw] md:w-[56vw] mx-auto flex-col mt-12 ">
        <div className="text-5xl font-medium font-serif">
            {blog.title || "No Title Available"}
        </div>
        <div className="pt-6 flex gap-4 items-center">
           <Avatar width="w-7" height="h-7" text={blog.author.name}/>
           <div className="flex flex-col">
               <div>{blog.author.name.toUpperCase()}</div>
               <div className="flex items-center">
                <div className="text-sm text-gray-500 font-semibold pr-2">{Math.ceil(blog.content.length/300)} min read</div>
                <div className="text-gray-500 font-semibold rounded-full bg-gray-500 h-[2px] w-[2px]"></div>
                    <div className="pl-2 text-sm text-gray-500 font-semibold ">
                    { months[date.getMonth()].substring(0,3)+" "+date.getDate()+","+date.getFullYear()  }
                    </div>
               </div>
           </div>

        </div>
        <div className="pt-6 text-xl leading-relaxed font-serif"
            dangerouslySetInnerHTML={{__html:blog.content }}
        ></div>
        <Blogfooter/>
    </div>
  )
}
