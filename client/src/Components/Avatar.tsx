
const Avatar = ({text,width,height,colour="bg-red-600",setprof}:{text:string,width?:string,height?:string,colour?:string,setprof?:()=>void})=>{
    return (
    <div onClick={setprof}  className={` ${width} ${height} flex items-center justify-center cursor-pointer ${colour} rounded-full`}>
    <span className="font-medium text-gray-100 ">{text[0].toUpperCase()}</span>
    </div>
    );
}
export default Avatar;