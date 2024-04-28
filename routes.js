const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    }
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    }
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome, ${username}!`;
    }
  },
  {
    method: 'POST',
    path: '/books',
    handler: (request, h) => {
      const { author, title } = request.payload;
      const output = {
        id: new Date().getTime(),
        author,
        title
      }
      return h.response(output)
              .header('Content-Type', 'application/json')
              .code(201);
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    }
  }
];

module.exports = routes;
