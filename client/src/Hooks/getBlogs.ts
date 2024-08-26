import { useEffect, useState } from "react";
import axios from "axios";
import backend_url from "../config";
export interface Blog{
    id:string,
    title:string,
    content:string,
    author?:{
        name:string
        colour:string
    }
    published_date:string
}
export const useAllbogs =  ()=>{
   const [loading,setloading]=useState<boolean>(true);
    const [Listofblogs,setListofblogs] = useState<Blog[]>([]);
      useEffect(()=>{
        axios({
            method:"get",
            url:backend_url+"/api/v1/blog/bulk",
            headers:{
            authorization: localStorage.getItem('token')||""
            }
        }).then(response=>{
            setListofblogs(response?.data);
            setloading(false);
        })
      },[]);

    // console.log(ret);
    return {loading,Listofblogs};
}
