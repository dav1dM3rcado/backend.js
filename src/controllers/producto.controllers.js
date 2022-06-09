import Producto from "../models/producto";
const productoCtrl = {};
// agregamos la logica para obtener la lista de productos

productoCtrl.listarProductos = async (req, res) => {
  //toda la logica que quiero que suceda
  try {
    // crear un arreglo de producto y enviar
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    //enviar un codigo de error
    res.status(404).json({
      mensaje: "error al intentar agregar los productos",
    });
  }
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

productoCtrl.obtenerProducto = async (req, res) => {
  try {
    //obtener el id de la consulta del request
    console.log(req.params.id);
    // buscar el producto
    const productoBuscsado = await Producto.findById(req.params.id);
    //enviar el producto por respuesta para fronend
    res.status(200).json(productoBuscsado);
  } catch (error) {
    console.log(error);
    // enviar un codigo de error
    res.status(404).json({
      mensaje: "Error nose pudo tener el producto buscado",
    });
  }
};
export default productoCtrl;
