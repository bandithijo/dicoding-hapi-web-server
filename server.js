const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello Hapi!';
    }
  })

  await server.start();
  console.info(`Server listening on ${server.info.uri}`);
};

init();
