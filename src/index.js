import express from "express";

//creo una instacia de express
const app = express();

// creao un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("estoy en el puerto" + app.get("port"));
});
