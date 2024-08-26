import { Link, useNavigate } from "react-router-dom";
import Label from "../Components/Label";
import { useState } from "react";
import axios from "axios";
import backend_url from "../config";
import {Oval} from "react-loader-spinner"
import toast from "react-hot-toast";

const Signin = () => {
    const navigate = useNavigate();
    const [loader,setloader] = useState(false);
    const [details, setdetails]= useState({
        email:"",
        password:""
    });
    const sendUserDetails = async()=>{
        setloader(true);
         axios({
            method:"post",
            url:backend_url+"/api/v1/user/signin",
            data:details
        }).then((response)=>{
            localStorage.setItem('token',response?.data?.jwt);
            toast.success("LogIn Succesful!");
        navigate("/blogs");
        }).catch((err)=>{
            setloader(false);
            toast.error(err?.error || "User Not Found");
        })
        
    }
    return (
        <div className="flex flex-col justify-center items-center w-[60%] h-screen px-10 mx-auto">
            <div className="font-semibold fon text-3xl text-slate-950 w-full text-center">
                Welcome Back
            </div >
            <div className="flex-col flex mt-3 w-full">
            <Label label="Email" placeholder="Enter Your Email" inputType="text"changefunc={(e)=>{
                  setdetails({
                    ...details,
                    email:e.target.value
                  })
                }} />
                <Label label="Password" placeholder="Enter Your Password" inputType="password" changefunc={(e)=>{
                  setdetails({
                    ...details,
                    password:e.target.value
                  })
                }}/>
                {loader?(<button className="w-full mt-8 font-sans bg-slate-950 text-slate-50 font-semibold text-sm hover:bg-slate-800 py-2 rounded-lg flex justify-center items-end">
                    <Oval visible={true} height="15" width="15" color="#f8fafc" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass=""
  />
                </button>):(<button className="w-full mt-8 font-sans bg-slate-950 text-slate-50 font-semibold text-sm hover:bg-slate-800 py-2 rounded-lg"
                onClick={sendUserDetails}>
                    Sign In
                </button>)}
                <div className="text-sm font-sans font-semibold text-gray-600 text-center pt-2">
                    No account? <Link className=" hover:text-gray-800 underline decoration-solid"to="/signup">Create One</Link>
                </div>
            </div>
        </div>


    );
};

export default Signin;