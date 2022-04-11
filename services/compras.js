const MongoLib = require('../lib/mongo');

class compraServices {

    constructor(){
        this.collection = 'appweb';
        this.mongoDB = new MongoLib();
    }

    async createProduct(p){
        const ProductCreated = await this.mongoDB.createLuhn(this.collection, p);
        return ProductCreated;
    }

    async getProduct(id){
        const prod = await this.mongoDB.getProduct(this.collection, id);
        return prod || {};
    }
}

module.exports = compraServices;