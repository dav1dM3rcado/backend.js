// modelamos el dato a guardar en la BD
import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";
//instancio al router
const router = Router();

//crear la ruta
router
  .route("/products")
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.creaProducto);

router.route("/products/:id").get(productoCtrl.obtenerProducto); // => ahi va un parametro del froend id

export default router;
