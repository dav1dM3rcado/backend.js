// modelamos el dato a guardar en la BD
import { Router } from "express";
import productsCtrl from "../controllers/producto.controllers";
//instancio al router
const router = Router();

//crear la ruta
router
  .route("/products")
  .get(productsCtrl.listarProductos)
  .post(productsCtrl.creaProducto);

export default router;
