const express = require('express');
const apiRouter = express.Router();
const employeeRouter = require('./employees');
const menusRouter = require('./menu');

apiRouter.use('/employees', employeeRouter);
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;