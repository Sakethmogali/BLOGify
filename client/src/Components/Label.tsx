import { ChangeEvent } from "react";

const Label = ({label,placeholder,inputType,changefunc}:{
    label:string,placeholder:string,inputType:string,changefunc:(e: ChangeEvent<HTMLInputElement>)=>void})=>{
    return (
        <div className="w-full pt-2">
            <label className="text-sm font-semibold">
                {label} </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none block w-full p-2 mt-1" type={inputType} placeholder={placeholder}
                onChange={changefunc}/>
            
        </div>
    );
}
export default Label;