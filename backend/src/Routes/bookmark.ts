import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const bookmark = new Hono<{
    Bindings :{
        DATABASE_URL: string,
        JWT_SECRET:string
    }
    Variables:{
        Userid:string
    }
}>();

bookmark.use('*',async (c,next)=>{
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

bookmark.post('/add',async(c)=>{
    try{
        const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
        const Userid = c.get('Userid');
        const body=await c.req.json();
        const {postId} =body;
         const posts = await prisma.bookmark.create({
            data:{
                userId:Userid,
                postId:postId
            }
         },
         );
         return c.json({
            message:"Bookmarked"
         });
    }
    catch(err)
    {
        console.log(err);
    }
})
bookmark.get('/allbm',async(c)=>{
    try{
        const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
        const Userid = c.get('Userid');
       
        const allbmks = await prisma.bookmark.findMany({
            where:{
                userId:Userid,
            },
            select:{
                post:{
                    select:{
                        id:true,
                        title:true,
                        content:true,
                        author:{
                            select:{
                                name:true
                            }
                        }
                    }
                },
            }
         },);
         return c.json(allbmks);
    }
    catch(err)
    {
        console.log(err);
    }
})
bookmark.put('/rm',async(c)=>{
    try{
        const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
        const Userid = c.get('Userid');
        const body=await c.req.json();
        const postId =body.postId;
        const getpost = await prisma.bookmark.findFirst({
            where:{
                userId:Userid,
                postId:postId
            },
         },);
         const deletedpost = await prisma.bookmark.delete({
            where:{
                id:getpost?.id
            },
         },
         );
         return c.json({
            message:"UnBookmarked"
         })
         //return c.json(posts);
    }
    catch(err)
    {
        console.log(err);
    }
})

export default bookmark;