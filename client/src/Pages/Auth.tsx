import Quote from "../Components/Quote";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";

const Auth =({type}:{type:string})=>{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {type=='signup'?<Signup />:<Signin/>}
            <Quote/>
        </div>
    )
}

export default Auth;