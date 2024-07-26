import { Hono } from 'hono'
import api from './Routes/api';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono();


app.route('/',api);
export default app
