import Producto from "../models/producto";
const productoCtrl = {};
// agregamos la logica para obtener la lista de productos

productoCtrl.listarProductos = (req, res) => {
  //toda la logica que quiero que suceda
  res.send("hola desde el backend");
};

productoCtrl.creaProducto = async (req, res) => {
  try {
    console.log(req.body);
    //validar
    // crear el producto en las base de datos
    const productoNuevo = new Producto({
      mane: req.body.mane,
      edad: req.body.edad,
      local: req.body.local,
    });
    // guardar el objeto nuevo en la base de datos
    await productoNuevo.save();
    // enviar respuesta
    res.status(201).json({
      mensaje: "producto  correctamente creado",
    });
  } catch (error) {
    console.log(error);
    // enviar un codigo de error
    res.status(404).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};
export default productoCtrl;
