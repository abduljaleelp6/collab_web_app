const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
var verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  //let token = req.headers['authorisation'];
  //token=token.split("")[1];//for getting barer token
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  //jwt.verify(token, "secretkey", (err, decoded) => {
  jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, decoded) => {  
    
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
