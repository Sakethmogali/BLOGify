import CreateBlog from "../Components/CreateBlog";
import Header from "../Components/Header";
import axios from "axios";
import backend_url from "../config";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function NewBlog()
 {
  const [title,settitle]=useState<string>("");
  const [content,setcontent]=useState<string>("");
  const navigate = useNavigate();
  const AddBlog=()=>{
    axios({
     method:"post",
     url:backend_url+"/api/v1/blog/add",
     headers:{
       authorization: localStorage.getItem('token')||""
       },
       data:{
         title:title,
         content:content
       }
    }).then((resp)=>{
      toast.success("Blog Created!");
      navigate('/blog/'+resp?.data?.id)
    }).catch((err)=>{
      {
        toast.error("Blog cannot be created Now!" || err)
      }
    })
    
  }
   
  return (
    <>
      <Header Add={2} AddBlog={AddBlog}/>
      <CreateBlog settitle={settitle} setcontent={setcontent} content={content} title={title}/>
    </>
  );
}
 
