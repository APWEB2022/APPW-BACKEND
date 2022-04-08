const luhnApi = require('./luhn');

function controllers(app){
    luhnApi(app);
}

module.exports = controllers ;