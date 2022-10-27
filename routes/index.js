const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res, next) => {
    try {
      return res.render('layout', {
        pageTitle: 'Iube',
        template: 'main',
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
