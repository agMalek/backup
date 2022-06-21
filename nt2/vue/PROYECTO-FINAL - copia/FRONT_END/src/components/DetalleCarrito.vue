<template>

  <section class="src-components-detalle-carrito">
    <div class="jumbotron">
      <h1>Detalle carrito</h1>
      <hr>
      
      <p>{{hola}}</p>

      <div class="table-responsive">
        <table>
          <tr class="bg-info text-white">
            <th class="centrar">Imagen</th>
            <th class="centrar">Producto</th>
            <th class="centrar">Cantidad</th>
            <th class="centrar">Precio Unitario</th>
            <th class="centrar">Subtotal</th>
          </tr>
          <tr class="bg-dark text-white" v-for="(producto, index) in carrito" :key="index">
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
          <tr class="bg-warning" v-if="termino">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="centrar"> <b>{{total}}</b></td>
          </tr>


        </table>
        
      </div>



    </div>
  </section>

</template>

<script >
const urlProductos = "http://localhost:3000/productos/";

  export default  {
    name: 'src-components-detalle-carrito',
    props: [],
    mounted () {
      this.getAllProductos()
      this.getTotal()
      this.getCarrito()
    },
    data () {
      return {
        productos:[],
        total: 0,
        carrito:[],
        termino: false
      }
    },
    methods: {
      getCarrito(){
        this.carrito = this.$store.state.carrito
      },
      async getAllProductos(){
        const res = await this.axios(urlProductos)
        this.productos = res.data
        console.log(res.data)
      },
      async getTotal(){
        this.getCarrito()
        for(let i=0; i<this.carrito.length; i++){
          this.total += this.carrito[i].cantidad * (await this.getProducto(this.carrito[i].idProd)).precio
        }
        this.termino = true
      },
      async getProducto(id){
        try {
          let res = await this.axios(urlProductos + id)
          return res.data
        } catch (error) {
          console.error(error)
        }
      },
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .centrar{
  text-align: center;
  width: 150px;
}
</style>
