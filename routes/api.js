const MenuController = require('../app/http/controllers/MenuController');
function routeInitail(app) {
    app.get('/', MenuController().index)
}

module.exports = routeInitail;