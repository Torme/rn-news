const http = require('http');
const port = 3000;
const users = [
  { username: 'Admin', password: 'password' },
];

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/login') {
    let data;

    req.on('data', (chunk) => {
      data = chunk;
    });

    req.on('end', () => {
      const parsedData = JSON.parse(data);
      const { username, password } = parsedData;

      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        // get a random message from the list
        const randomSuccessMessage = [
          'Welcome back!',
          'You\'re logged in!',
          'Nice to see you again!',
          'You\'re in!',
          'You\'re back!',
          'Hello there!',
        ][Math.floor(Math.random() * 6)];

        const response = { message: randomSuccessMessage };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
      } else {
        const response = { message: 'Nom d\'utilisateur ou mot de passe incorrect.' };
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page non trouvée');
  }
});

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
