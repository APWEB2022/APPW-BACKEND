const MongoLib = require('../lib/mongo');

class compraServices {

    constructor(){
        this.collection = 'compras';
        this.mongoDB = new MongoLib();
    }

    async createProduct(p){
        const ProductCreated = await this.mongoDB.create(this.collection, p);
        return ProductCreated;
    }

    async getProduct(id){
        const prod = await this.mongoDB.get(this.collection, id);
        return prod || {};
    }
}

module.exports = compraServices;