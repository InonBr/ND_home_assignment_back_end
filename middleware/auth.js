require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      process.env.TOKEN,
      (err, decodedToken) => {
        if (err || decodedToken.id !== req.params.userId) {
          res.status(401).send('forbidden request');
        } else {
          req.currentUser = decodedToken;
          next();
        }
      }
    );
  } else {
    res.status(401).send('forbidden request');
  }
};

module.exports = auth;
