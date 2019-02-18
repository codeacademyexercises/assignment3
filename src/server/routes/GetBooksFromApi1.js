// const server = require('./api1.js');
const routes = require('./routes.js');

const display = async () => {
  let result;
  await routes.GetBooksWithRatingSorted().then((SortedBooks) => { result = SortedBooks; });
  return result;
};

module.exports = {
  method: 'GET',
  path: '/BooksWithRatings',
  handler: display,
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
};

// const init = async () => {
//   await server.start();
// };
// init();



// module.exports = server;