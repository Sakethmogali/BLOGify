import { Newspaper, User, Bookmark, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
const Profileview =({prof}:{prof:boolean})=>{
      return (
        <div className={`flex flex-col absolute w-48 bg-slate-50 shadow-lg rounded-sm z-10 ${prof?"top-16 right-14":"hidden"}`}>
            <div className="border-b-[1px] p-2 text-slate-950 border-gray-200   flex items-center gap-2">
            <User className='w-6 h-5'/>
            <div>View profile</div>
            </div>
            <div className="border-b-[1px] p-2 text-slate-950 border-gray-200   flex items-center gap-2">
            <Newspaper className='w-6 h-5'/>
            <div>My Blogs</div>
            </div>
            <div className="border-b-[1px] p-2 text-slate-950 border-gray-200   flex items-center gap-2">
            <Bookmark className='w-6 h-5 '/>
            <div>My Bookmarks</div>
            </div>
            <div className="border-b-[1px] p-2 text-slate-950 border-gray-200   flex items-center gap-2">
            <LogIn className='w-6 h-5 '/>
            <div><Link to="/signin" >Log Out</Link></div>
            </div>
        </div>
      );
};
export default Profileview;