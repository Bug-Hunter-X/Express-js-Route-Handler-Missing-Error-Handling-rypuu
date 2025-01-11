const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    // Sending a generic 404 response without details
    res.status(404).send('User not found');
  }
});