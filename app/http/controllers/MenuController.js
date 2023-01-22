const Menu = require('../../models/Menu');
function menuInitial() {
    return {
        index(req, res) {
           Menu.find().then((data) => {
                res.json({menus: data})
           }).catch(err => {
                res.json({ error : err})
           });
        }
    }
}

module.exports = menuInitial;