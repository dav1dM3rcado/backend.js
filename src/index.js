import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//creo una instacia de express
const app = express();

// creao un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("estoy en el puerto" + app.get("port"));
});

//midlewares
app.use(morgan("dev")); // da informacion en la terminal
app.use(cors()); //permite peticiones remotas
//permite recibir objetos en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//aqui mostramos por defecto el index.html de la carpeta public
app.use(express.static(path.join(__dirname, "../public")));
// ruta de prueba
app.get("/products", (req, res) => {
  // lo que quiero que pase cuando se ejecute esta consulta
  res.send("hola desde el backend");
});
app.get("/", (req, res) => {
  // lo que quiero que pase cuando se ejecute esta consulta
  res.send("hola desde el backend");
});
