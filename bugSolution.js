const express = require('express');
const app = express();
const logger = require('winston'); // or any logging library
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Validate userId
  if(isNaN(userId) || userId <= 0){
    logger.error(`Invalid userId: ${userId}`);
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    logger.warn(`User with ID ${userId} not found`);
    res.status(404).json({ error: 'User not found' });
  }
});