// import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
// import backend_url from "../config";
// import { useNavigate } from "react-router-dom";
const modules={
  toolbar:[
    [{header:[1,2,3,4,5,6,false]}],
    [{font:[]}],
    [{size:[]}],
    ["bold","italic","underline","strike","blockquote"],
    [
      {list:"ordered"},
      {list:"bullet"},
      {indent:"-1"},
      {indent:"+1"}
    ],
    ["image","video"],
    ["link","code",'formula'],
    [{ 'script': 'sub'}, { 'script': 'super' }],
  ]
}
export default function CreateBlog({settitle,setcontent,content,title}:{settitle:any,setcontent:any,content:string,title:string}) {

  const [dialogue,setdialogue] =useState<boolean>(false);
  const changeTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    settitle(e.target.value);
  }
  return (
    <>
  
    <div className={`mt-4 `+(dialogue?"hidden":"flex flex-col")}>
        
        <div className=" w-[94vw] md:w-[75vw] mx-auto ">
        <input type="text" name="title" className=" w-[94vw] md:w-[75vw] text-4xl p-2  mt-8 mb-4 C font-serif focus:outline-none" value={title} onChange={changeTitle} placeholder="Title"/>
        </div>
       <div className="h-[79vh]">
      <ReactQuill theme="snow" className="mx-auto p-1 w-[94vw] md:w-[75vw] h-[80%] " value={content} onChange={setcontent} placeholder="Write your Story..."
      modules={modules}/> 
      </div>
      
    </div>
    <div className={``+(dialogue?"flex justify-center items-center  ":"hidden")}>
          <div className="md:w-[70vw] md:h-[60vh]">
           <div
        dangerouslySetInnerHTML={{__html:content}}
      />
          <button className="px-10 py-2 rounded-3xl bg-slate-900 text-sm text-slate-50 mx-6"
            onClick = {()=>setdialogue(!dialogue)}>Ok</button>
          </div>
      </div>
    </>
  )
}



