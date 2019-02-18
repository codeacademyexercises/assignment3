const hapi = require('hapi');
const routes = require('./routes/index');

const server = hapi.Server({
    host: 'localhost',
    port: 3005,
});

const init = async ()=>{
    server.route(routes);
    await server.start();
}
// if(!module.parent){
    init();

process.on('SIGINT', () => {
    server.stop({ timeout: 10000 }).then((err) => {
      console.log(err);
      process.exit((err) ? 1 : 0);
    });
  });

  module.exports = server;