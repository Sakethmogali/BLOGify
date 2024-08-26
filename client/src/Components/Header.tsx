import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";
import Profileview from "./Profileview";

export default function Header({Add,AddBlog}:{Add:number,AddBlog:()=>void}) {
  const navigate = useNavigate();
  const [prof,setprof] = useState<boolean>(false);
  const CreateBlog = ()=>{
      navigate("/blog/New");
  } 

 
  return (
    <>
    <div className="h-16 flex justify-between items-center shadow-md w-full top-0 z-50 sticky left-0 ">
        <div className="text-xl text-slate-950 font-semibold px-4 md:px-16 py-4 ">
          <Link to="/" >BLOGify</Link>
        </div>
        {
          (Add==1)&&(<div className=" flex justify-between md:px-16 px-10 gap-8">
          <button className="md:px-10 md:py-2 px-6 rounded-3xl bg-green-600 hover:bg-green-500 text-sm text-slate-50"
            onClick = {CreateBlog }>Add</button>
            <div className="flex flex-col gap-14">
            <Avatar text="Saketh" width="w-9" height="h-9" setprof={()=>{setprof(!prof)}}/>
             <Profileview prof={prof}/>
              </div>
        </div>)
        }
        {
          (Add==0)&&(
            <div className="flex flex-col gap-14 mx-16">
            <Avatar text="Saketh" width="w-9" height="h-9" setprof={()=>{setprof(!prof)}}/>
             <Profileview prof={prof}/>
              </div>
           )
        }
        
        {
          (Add==2)&&(   
            <div className="flex justify-center md:justify-end mx-6 md:mx-10">
        <button className="md:px-10 px-6 py-2 rounded-3xl bg-slate-900 hover:bg-slate-700 text-sm text-slate-50 mx-6"
            onClick = {()=>{}}>Preview</button>
           
             <button className="md:px-10 px-6 py-2 rounded-3xl bg-green-600 hover:bg-green-500 text-sm text-slate-50 mr-6"
            onClick = {AddBlog}>Publish</button>
             <div className="flex flex-col gap-14">
            <Avatar text="Saketh" width="w-9" height="h-9" setprof={()=>{setprof(!prof)}}/>
             <Profileview prof={prof}/>
              </div> 
        </div>
          )
        }
       
     </div>
   
    
     </>
  )
}
// ()=>setdialogue(!dialogue)