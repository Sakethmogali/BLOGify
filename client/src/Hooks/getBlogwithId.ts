import axios from "axios";
import { useEffect, useState } from "react";
import backend_url from "../config";

const useblogById = (id:string)=>
{
    const [status,setstatus]=useState({loading:true,blog:{}});
    useEffect(()=>{
            axios({
                method:"get",
                url:backend_url+"/api/v1/blog/"+id,
                headers:{
                    authorization: localStorage.getItem('token')||""
                }
            }).then(response=>{
                setstatus({
                    loading:false,
                    blog:response?.data?.post
                })
            })
    },[])
    return status;
}
export default useblogById;