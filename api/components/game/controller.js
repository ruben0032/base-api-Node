const response = require('../../../network/response');

module.exports = {
  getAllGames: async (req, res) => {
    try {
      response.succes(req, res, [{ id: 1, title: 'algo' }]);
    } catch (error) {
      response.error(req, res, { message: 'UPS! algo salio mal' });
    }
  },
};
