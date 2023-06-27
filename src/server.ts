import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('viwes', path.join(__dirname, 'view'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);

server.use((req, res)=> {
    res.send('pagia não encontrada');
})


server.listen(process.env.PORT);
