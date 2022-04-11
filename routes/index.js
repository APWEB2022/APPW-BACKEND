const ComprasApi = require('./compras');
const luhnApi = require('./luhn');

function controllers(app){
    luhnApi(app);
    ComprasApi(app);
}

module.exports = controllers ;