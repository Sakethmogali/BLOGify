import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
    Bindings :{
        DATABASE_URL: string
        JWT_SECRET:string
    }
    Variables:{
        Userid:string
    }
}>();


blog.use('*',async (c,next)=>{
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
blog.get('/bulk',async(c)=>{
    try{
        const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
        const Userid = c.get('Userid');
        console.log(Userid);
         const posts = await prisma.post.findMany({
             select:{
               id:true,
               content:true,
               title:true,
               published_date:true,
               author:{
                 select:{
                     id:true,
                     name:true,
                     email:true,
                     colour:true
                 }
               }   
             }
         },
         );
         return c.json(posts);
    }
    catch(err)
    {
        console.log(err);
    }
   
});
blog.get('/my',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
    try{
        const userId=c.get('Userid')
        const myblogs = await prisma.post.findMany({
            where :{
                author:{
                    id:userId,
                }
            },
        })
        return c.json({myblogs});
    }
    catch(err)
    {
        c.status(411);
        return c.json({
            error:"Error while fetching!"
        });
    }
})
blog.get('/:id',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
    const id = c.req.param('id');
    try{
        const post = await prisma.post.findUnique({
            where :{
                id:id
            },
            select:{
                id:true,
                title:true,
                content:true,
                published_date:true,
                author:{
                    select:{
                        name:true,
                        colour:true
                    }
                }
            }
        })
        if(post == null)
        {
            return c.json({
                error:"Blog doesn't Exist"
            });
        }
        return c.json({post});
    }
    catch(err)
    {
        c.status(411);
        return c.json({
            error:"Blog doesnot exist"
        });
    }
});
blog.post('/add',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
     const Userid = c.get('Userid');
    const body = await c.req.json();

    const post = await prisma.post.create({
        data:{
            title:body.title,
            content: body.content,
			authorId: Userid
        }
    })
    return c.json({
        id:post.id
    })
});
blog.put('/update',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl: c.env?.DATABASE_URL,}).$extends(withAccelerate());
    const Userid = c.get('Userid');
    const body = await c.req.json();
    const upd = await prisma.post.update({
        where:{
            id:body.id,
            authorId:Userid
        },
        data:{
            title: body.title,
			content: body.content
        }
    })
    return c.json({upd});
    return c.text('Blog is Updated');
})
export default blog;