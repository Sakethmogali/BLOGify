import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import  {months } from "../config";
import getTextfromHTML from "../Hooks/getTextfromHTML";
interface preview{
  Author:string,
  title:string,
  content:string,
  id:string,
  colour:string,
  published_date:string
}

export default function PreviewElement({Author,title,colour,content,id,published_date}:preview) {
  const navigate= useNavigate();
  const date=new Date(published_date);
  // console.log(months[date.getMonth()]+date.getDate()+date.getFullYear());
  const Notify = ()=>{
      navigate("/blog/"+id);
  }
  return (
    <div className="pt-4 border-b-2 border-gray-200 text-sm cursor-default">
        <div className="flex items-center font-sans pb-2">
            <Avatar text={Author[0]} width="w-6" height="h-6" colour={colour}/>
            <div className="text-sm ml-2 font-semibold ">{ Author}</div>
            <div className="w-[2px] h-[2px] bg-gray-300 rounded-full mx-1"></div>
            <div  className="text-sm text-gray-400 "> { date.getDate()+" "+months[date.getMonth()].substring(0,3)+" "+date.getFullYear() }</div>
        </div>
        <div className="max-w-[75%]">
            <div className="font-bold text-slate-950 text-xl cursor-pointer"  onClick={Notify}>{title}
            </div>
            <div className="py-2 text-sm font-sans">{getTextfromHTML(content)}...</div>
            <div className="py-3 flex justify-between items-center">
                    <div className="text-xs text-gray-400 pl-3">{Math.ceil(content.length/300)} min read</div>
                    <div className="pr-3 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#020611" d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>
                    </div>
            </div>
        </div>
    </div>
  )
}
