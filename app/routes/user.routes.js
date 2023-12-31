var express = require('express');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/auth.middleware');
var router = express.Router();
router.get('/api', (req, res) => {
    return res.json({
        message:"Welcome to api",
       });
});
router.get('/api/login', (req, res) => {
 const user={
    id:1,
    username:"admin",
    email:"admin@admin.com",

 };
 jwt.sign({user:user}, "secretkey", (err, token) => {
  
      return res.json({
       token,
      });
    
   
    
  });
    });
    router.post('/api/post',verifyToken, (req, res) => {
       
        return res.json({
            message:"Authorosation Success",
           });
        
           });
module.exports = router;
