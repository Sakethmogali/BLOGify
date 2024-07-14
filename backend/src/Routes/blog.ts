import { Hono } from "hono";

const blog = new Hono();

blog.get('/bulk',(c)=>{
    return c.text('Bulk of Blogs');
});
blog.get('/:id',(c)=>{
    const parameter= c.req.param('id');
    return c.text('Blog with '+parameter);
});
blog.post('/',(c)=>{
    return c.text('This is POST Method in blog');
})
blog.put('/',(c)=>{
    return c.text('This is PUT Method in blog');
})
export default blog;