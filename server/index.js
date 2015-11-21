import http from 'http';
import express from 'express';
import socketio from 'socket.io';

import createStore from './store';
import * as actions from './store/actions';
import routes from './routes';


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const store = createStore();


io.on('connection', socket => {
    socket.on('disconnect', () => console.log('Cleanup'));
	// TODO
});

app.use(express.static('public'));

app.use(routes);


server.listen(process.env.PORT || 80, process.env.IP, () => console.log('Listening'));
