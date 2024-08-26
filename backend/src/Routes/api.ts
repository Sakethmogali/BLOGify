import { Hono } from 'hono'
import blog from './blog';
import user from './user';
import bookmark from './bookmark';
const api  = new Hono().basePath('/api/v1');

api.route('/blog',blog);
api.route('/user',user);
api.route('/bookmark',bookmark);

api.get('/', (c)=>{
  c.redirect('/blog/bulk');
  return c.text('This is API ..');
});

export default api;