const Producto = require("../models/productos.model.js");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let producto = new Producto({
    producto_id:req.body.producto_id,
    producto:req.body.producto,
    precio: req.body.precio,
    descripcion: req.body.descripcion
  });
  producto.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el producto");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El producto se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Producto.find(function (err, productos) {
    res.json(productos);
  });
};

exports.findOne = function (req, res) {
  Producto.findOne({ _id: req.params.id }, function (err, producto) {
    res.json(producto);
  });
};

exports.update = function (req, res) {
  let producto = {
    producto_id:req.body.producto_id,
    producto:req.body.producto,
    precio: req.body.precio,
    descripcion: req.body.descripcion
  };
  Producto.findByIdAndUpdate(req.params.id, { $set: producto }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el producto");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El producto se guardó correctamente");
    res.json(response);
  });
};


exports.remove = function (req, res) {
  Producto.findByIdAndRemove({_id: req.params.id}, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el producto");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El producto se guardó correctamente");
    res.json(response);
  });
};