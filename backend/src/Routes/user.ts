import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from "hono/jwt";
// type Bindings =
const user = new Hono<{Bindings:{
    DATABASE_URL: string
    JWT_SECRET:string
},
    Variables:{
        Userid:string
    }
}>();

user.post('/signup',async (c)=>{
   let prisma;
   try{
     prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
   }
   catch(err)
   {
      console.log(err);
   }
    const body= await c.req.json();
    try{
        const createdUser = await prisma?.user.create({
            data:{
                name:body.username,
                email:body.email,
                password:body.password,
                colour:body.colour
            }
        });
        const userToken = await sign({id:createdUser?.id},c.env.JWT_SECRET);
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
   try{
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
   }
   catch(err)
   {
    console.log(err);
   }
})
user.use('/edit',async (c,next)=>{
    try{
        const jwttoken=c.req.header('authorization');
    if(!jwttoken)
    {
        c.status(401);
		return c.json({ error: "Unauthorized" });
    }
    const payload = await verify(jwttoken,c.env.JWT_SECRET);
    if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
    //@ts-ignore
    c.set("Userid",payload.id);
    await next();
    }
    catch(err)
    {
        console.log(err);
    }
})
user.post('/edit',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
    const Userid = c.get('Userid');
    const body = await c.req.json();
    const upd = await prisma.user.update({
        where:{
            id:Userid
        },
        data:{
            name: body?.name,
			bio: body?.bio
        }
    })
    return c.json({
        message:"User updated"
    });
})
export default user;