
var BusinessService = require('../services/business.service')  
const db = require('../helpers/db.helper');  
const apiResponder = require('../utils/apiResponder.js');
class BusinessController {
    async listAllBusiness(req, res) {
        try {
           
            console.log("inside business controller");
           // return db.query('SELECT * FROM business');
           const data = {
            "Business Name": "JKS",
            "BID": 34,
        }
        return apiResponder.successResponse(data);
        } catch (error) {
            console.error(error);

            return apiResponder.errorResponse(error);;
        }
        
    }
    /*listAllBusiness = async (req, res) => {
        try {
           db.query('SELECT * FROM business', (err, results) => {
      if (err) throw err;
      return res.json(results);
    });
        } catch (err) {
            req.logger.error('Error fetching hotels ', err);
            throw err;
        }
    }*/
    /*listAllBusiness = async (req, res) => {
        
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var businessList = await BusinessService.listAllBusiness()
        return res.status(200).json({ status: 200, data: businessList, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}*/
}

module.exports = BusinessController;