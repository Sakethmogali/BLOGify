import { Hono } from 'hono'
import api from './Routes/api';
const app = new Hono();


app.route('/',api);
export default app
