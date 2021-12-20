const express = require('express');
const cors = require('cors');
const UserService = require('./src/services/user/UserService');
const JDO = require('./src/services/mysql/jobsadmin.js');
const app = express(); 
app.set('JDO', JDO);
app.use(cors())

var userService = new UserService(app);

app.listen(3001, () => {
  console.log('Backend server running at: http://localhost:3001')
});
