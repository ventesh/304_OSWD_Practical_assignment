const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Create a Redis client
const redisClient = redis.createClient();

// Create a Redis session store
const RedisStore = connectRedis(session);

// Use express-session middleware with Redis as a session store
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set this to true if using HTTPS
  })
);

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simple in-memory user database for demonstration
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to check if a user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    return next();
  }
  res.redirect('/login');
};

// Route to render the login form
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="post" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Route to handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    req.session.isAuthenticated = true;
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

// Dashboard route accessible only to authenticated users
app.get('/dashboard', isAuthenticated, (req, res) => {
  const { username } = req.session.user;
  res.send(`<h1>Welcome, ${username}!</h1><a href="/logout">Logout</a>`);
});

// Route to log out
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/login');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
