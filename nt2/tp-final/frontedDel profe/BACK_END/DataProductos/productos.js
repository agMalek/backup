const connection = require('./connection');

const nombreBase = 'TPfinal';
const nombreColleccion = 'productos'


async function getAllProductos() {
    const mongo = await connection.getConnection();
    return await mongo.db(nombreBase)
         .collection(nombreColleccion)
         .find()
         .toArray()
};

async function getProducto(id) {
    const mongo = await connection.getConnection();
    return await mongo.db(nombreBase)
         .collection(nombreColleccion)
         .findOne({_id: parseInt(id)})
};

async function addProducto(producto) {
    const mongo = await connection.getConnection();
    await mongo.db(nombreBase)
        .collection(nombreColleccion)
        .insertOne(producto)
};

async function editProducto(producto) {
    const newValues = {
        $set: {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            imagen: producto.imagen
        }
    }
    const mongo = await connection.getConnection();
    await mongo.db(nombreBase)
        .collection(nombreColleccion)
        .updateOne({_id: parseInt(producto._id)}, newValues)
};

async function deleteProducto(id) {
    const mongo = await connection.getConnection();
    await mongo.db(nombreBase)
        .collection(nombreColleccion)
        .deleteOne({_id: parseInt(id)})
};

module.exports = {getAllProductos, getProducto, addProducto, editProducto, deleteProducto};
