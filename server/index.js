const express = require('express');
const cors = require('cors');
const UserService = require('./src/services/user/UserService');
const MailService = require('./src/services/mailing/MailService');
const PDO = require('./src/services/mysql/jobsadmin.js');
const app = express();
app.set('PDO', PDO)
app.use(express.json())
app.use(cors())

var userService = new UserService(app);
var mailService = new MailService(app);

app.listen(3001, () => {
  console.log('Backend server running at: http://localhost:3001')
});
