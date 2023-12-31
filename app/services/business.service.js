const db = require('../helpers/db.helper');
class BusinessServices
{
    listAllBusiness = async (req, res) => {
        try {
           db.query('SELECT * FROM business', (err, results) => {
      if (err) throw err;
      return res.send(results);
    });
        } catch (err) {
            req.logger.error('Error fetching hotels ', err);
            throw err;
        }
    }
}
module.exports = new BusinessServices();