import dotenv from 'dotenv';
import server from './src/events/server';
import routes from './src/general/routes';
import bodyParser from 'body-parser';

import index from './src/pages/index/index';
import api from './src/pages/api/index';

dotenv.config();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(new routes('').route, index);
server.use(new routes('api').route, api);

server.listen(process.env.PORT, '0.0.0.0', async () => {
  console.clear();
  console.log(`Initialized with success at 'localhost:${process.env.PORT}'`);
});
