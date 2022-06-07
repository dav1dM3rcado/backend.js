const productsCtrl = {};
// agregamos la logica para obtener la lista de productos

productsCtrl.listarProductos = (req, res) => {
  //toda la logica que quiero que suceda
  res.send("hola desde el backend");
};

productsCtrl.creaProducto = (req, res) => {
  console.log(req.body);
  res.send("voy a crear producto ");
};
export default productsCtrl;
