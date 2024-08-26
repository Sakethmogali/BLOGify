import { Link } from "react-router-dom";

const MainPage =()=>{
    return (
       <>
        <div className="h-16 flex justify-between items-center shadow-md w-full  ">
        <div className="text-xl text-slate-950 font-semibold px-4 md:px-16 py-4 ">
          <Link to="/" >BLOGify</Link>
        </div>
        <div className="mr-16">
        <button className="w-full  font-sans bg-slate-950 text-slate-50 font-semibold text-sm hover:bg-slate-800 py-2 rounded-3xl px-6 ">
                <Link to='/signup'>Get Started</Link>
        </button>
        </div>
        </div>
        <div className="h-[83vh] border-b-2 flex flex-col text-7xl font mx-16 gap-4 py-10">
            <div className="text-7xl" >
            A place to <b>read</b>, 
            </div>
            <div className="text-7xl">
            <b>write</b>, and
            </div>
            <div>
            <b>deepen</b> your 
            </div>
            <div className="text-9xl">
            understanding
            </div>
            <div>
            <Link to="/signin">
            <button className="py-2 px-12 rounded-3xl font-semibold bg-green-600 hover:bg-green-500 text-lg text-slate-50"
           >Start reading</button>
            </Link>
            </div>
        </div>
        <footer className="flex w-[40vw] mx-auto  justify-around">
            <div className="text-gray-700 text-[13px] font-semibold my-4"> Help </div>
            <div  className="text-gray-700 text-[13px] font-semibold my-4"> Careers </div>
            <div  className="text-gray-700 text-[13px] font-semibold my-4"> Privacy </div>
            <div  className="text-gray-700 text-[13px] font-semibold my-4"> Terms </div>
            <div  className="text-gray-700 text-[13px] font-semibold my-4"> Teams </div>
        </footer>

        </>
    );
}
export default MainPage;