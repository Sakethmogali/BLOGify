import { TailSpin } from "react-loader-spinner"

const Loader = ()=>{
    return <div className="flex justify-center items-center h-[100vh]">
    <TailSpin visible={true} height="80" width="80" color="#020617" ariaLabel="tail-spin-loading"
  radius="1" 
    />
  </div>
}
export default Loader;