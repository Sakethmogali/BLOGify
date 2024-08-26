// import React, { createContext, useContext,useState, ReactNode } from 'react';

const backend_url:string = "https://blogify.saketh.workers.dev";
const months=["Janauary","February","March","April","May","June","July","August","September","October","November","December"];
const colours:string[]=["bg-slate-800","bg-zinc-900", "bg-red-600","bg-fuchsia-600","bg-cyan-900","bg-emerald-700","bg-gray-600","bg-sky-600","bg-violet-900","bg-rose-700"]
export  default backend_url;
export {months,colours};


// interface User {
//   id: string;
//   name: string;
//   email: string;
//   colour:string;
//   bio:string
// }

// interface UserContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(Userprofile);
// //   if (context === undefined) {
// //     throw new Error('useUser must be used within a UserProvider');
// //   }
//   return context;
// };
