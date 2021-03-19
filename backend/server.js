var moment = require('moment');
const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody({
  json: true,
}));

moment.locale('ru')
const router = new Router();

var faker = require('faker');


let message = [
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  },
  {
    id: faker.random.uuid(), from: faker.internet.email(), subject: faker.lorem.word(), body: faker.lorem.sentence(), received: faker.time.recent()
  }
];


router.get('/messages/unread', async (ctx) => {
  ctx.response.body = {
    status: "ok",
    timestamp: 1553400000,
    messages: message
  };
});


app.use(router.routes());
app.use(router.allowedMethods());


const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started on http://localhost: 7070'));
