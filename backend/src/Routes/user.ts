import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
type Bindings ={
    DATABASE_URL: string
    JWT_SECRET:string
}
const user = new Hono<{Bindings:Bindings}>();

user.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body= await c.req.json();
    try{
        const createdUser = await prisma.user.create({
            data:{
                email:body.email,
                password:body.password
            }
        });
        const userToken = await sign({id:createdUser.id},c.env.JWT_SECRET);
        return c.json({
            jwt:userToken
        });
    }
    catch(err)
    {
        return c.text('Something Went Wrong, Please Try Again.',403);
    }
    
})
user.post('/signin',async (c)=>{
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body= await c.req.json();
    const findUser = await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    })
    if(!findUser)
    {
        c.status(403);
        return c.json({
            error:"User Not Found"
        });
    }
    const userToken = await sign({id:findUser.id},c.env.JWT_SECRET);
        return c.json({
            jwt:userToken
        });
    return c.text('SignIn Page');
})

export default user;