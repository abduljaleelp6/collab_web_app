
const db = require('../helpers/db.helper.js');  
const apiResponder = require('../utils/apiResponder.js');
class ChatController {
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
   
}

module.exports = ChatController;