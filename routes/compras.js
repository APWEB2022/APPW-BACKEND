const express = require('express');
const compraServices = require('../services/compras');

function ComprasApi(app) {
    const router = express.Router();
    app.use("/compras", router);
    const compraService = new compraServices();

    router.put("/", async function(req, res, next){
        const produ = req.body;
        try {
            const ProductCreate = await compraService.createProduct(produ);
            
                res.status(200).json({
                    data: ProductCreate,
                    message: 'Producto ingresado correctamente'
                });
          
        } catch (err) {
            next(err);
        }
    });

    router.get("/", async function(req, res, next){
        const id = req.body;
        try {
            const Producto = await compraService.getProduct(id);
          res.status(200).json({
              producto : Producto
          });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = ComprasApi