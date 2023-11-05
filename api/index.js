const express = require('express')
const app = express()
const PORT = 4000

const users = [
  { username: 'Admin', password: 'password' },
];

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    const randomSuccessMessage = [
      'Welcome back!',
      'You\'re logged in!',
      'Nice to see you again!',
      'You\'re in!',
      'You\'re back!',
      'Hello there!',
    ][Math.floor(Math.random() * 6)];

    res.status(200).json({ message: randomSuccessMessage });
  } else {
    res.status(401).json({ message: 'Invalid username or password.' });
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app