

var express = require('express');
var router = express.Router();
const BusinessController = require('../controllers/business.controller.js');
const db = require('../helpers/db.helper'); 
const { verifyToken } = require('../middleware/auth.middleware');
const bObj=new BusinessController();

 
  router.get('/business',verifyToken, async (req, res) => {
    const results = await bObj.listAllBusiness(req, res);
    /*try {
           
      console.log("inside business config");
      return db.query('SELECT * FROM business');
     
       
  } catch (error) {
      console.error(error);
      return null;
  }*/
    return res.json(results);
  
    });
  module.exports = router;