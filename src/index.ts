import dotenv from 'dotenv';
import server from './events/server';
import routes from './general/routes';
import bodyParser from 'body-parser';

import index from './pages/index/index';
import api from './pages/api/index';

dotenv.config();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('', index);
server.use(new routes('api').route, api);

server.listen(process.env.PORT, '0.0.0.0', async () => {
  console.clear();
  console.log(`Initialized with success at 'localhost:${process.env.PORT}'`);
});
