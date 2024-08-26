import { Hono } from 'hono'
import api from './Routes/api';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors';

const app = new Hono();

app.use(cors());
app.route('/',api);
export default app
