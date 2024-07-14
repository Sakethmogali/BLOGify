import { Hono } from "hono";

const user = new Hono();

user.post('/signup',(c)=>{
    return c.text('SignUp Page');
})
user.post('/signin',(c)=>{
    return c.text('SignIn Page');
})

export default user;