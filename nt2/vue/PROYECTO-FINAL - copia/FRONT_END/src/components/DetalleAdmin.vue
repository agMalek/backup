<template>
  <section class="src-components-detalle-admin">
    <br>
    <h1>Detalle del pedido</h1>
    <hr>
    
    <div>
      <div class="media-body ml-3">
        <p>
          Pedido número: <i>{{ pedido._id }}</i>
        </p>
        <p>
          Fecha: <i>{{ pedido.fecha }}</i>
        </p>
        <p>
          Importe: <i>{{ pedido.importe }}</i>
        </p>
        <p>
          Estado: <i>{{ pedido.terminado ? "Terminado" : "Pendiente" }}</i>
        </p>
      </div>
    </div>


   <!--  <div class="table-responsive">
        <table class="table">
          <tr class="bg-info text-white">
            <th>Pregunta</th>
            <th>Respuestas</th>
          </tr>
          <tr class="bg-secondary text-white" v-for="(p, index) in preguntas" :key="index">
            <td>{{ p.pregunta }}</td>
            <td>{{ p.respuestas }}</td>
          </tr>
        </table>
      </div>   -->

    <div class="table-responsive">
      <table>
        <tr class="bg-info text-white">
          <th class="centrar">Imagen</th>
          <th class="centrar">Producto</th>
          <th class="centrar">Cantidad</th>
          <th class="centrar">Precio Unitario</th>
          <th class="centrar">Subtotal</th>
        </tr>
        <tr class="bg-dark text-white" v-for="(producto, index) in pedido.productos" :key="index">
          <td>
            <img 
              :src="productos[productos.findIndex(a=>a._id == producto.idProd)].imagen" 
              :alt="productos[productos.findIndex(a=>a._id == producto.idProd)].nombre" 
              :style="{'width':'100px', 'heigth': '100px', 'padding':'4px'}"
            >
          </td>
          <td class="centrar">{{productos[productos.findIndex(a=>a._id == producto.idProd)].nombre}}</td>
          <td class="centrar">{{producto.cantidad}}</td>
          <td class="centrar">{{productos[productos.findIndex(a=>a._id == producto.idProd)].precio}}</td>
          <td class="centrar">{{(productos[productos.findIndex(a=>a._id == producto.idProd)].precio) * Number.parseInt(producto.cantidad) }}</td>
        </tr>
        <tr class="bg-warning">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="centrar"> <b>{{pedido.importe}}</b></td>
        </tr>
      </table>
    </div>

    <br>
    <br>

    <a href="" @click="this.goPedidosAdmin()">Volver al listado</a>

    <br />
    <br />
  </section>
</template>

<script >
const urlProductos = "http://localhost:3000/productos/";
const urlPedidos = "http://localhost:3000/pedidos/";

export default {
  name: "src-components-detalle-admin",
  props: ["id"],
  mounted() {
    this.getProducto();
    this.getAllProductos()
  },
  data() {
    return {
      pedido: {},
      productos:[]
    };
  },

  methods: {
    async getProducto() {
      const res = await this.axios(urlPedidos + this.id);
      console.log(res.data);
      
      this.pedido = res.data;
    },
    async getAllProductos(){
      const res = await this.axios(urlProductos)
      this.productos = res.data
      console.log(res.data)
    },
    goPedidosAdmin(){
      this.$router.push('/PedidosAdmin/')
    } 

  },
  computed: {},
};
</script>

<style scoped lang="css">


.centrar{
  text-align: center;
  width: 150px;
}
</style>
