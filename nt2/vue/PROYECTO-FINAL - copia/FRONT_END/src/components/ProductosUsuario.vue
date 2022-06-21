<template>
  <section class="src-components-productos-usuario">
    <div class="container-fluid my-3">
      <div class="jumbotron">
        <h2>Arma tu pedido!!!</h2>
        <hr />
        
        <!-- <div v-for="(c, index) in cant" :key="index">
          <p>{{c}}</p>
        </div> -->
        <div>
          <button class="btn btn-info my-3" @click="verCarrito()">Ver carrito</button>
        </div>

        <div v-for="(p, index) in carrito" :key="index">
          <p>{{p.idProd}}</p>
          <p>{{p.cantidad}}</p>
        </div>
        


        <div v-if="productos.length">
          <div
            class="media alert alert-warning"
            v-for="(producto, index) in productos"
            :key="index"
          >
            <img :src="producto.imagen" width="200" :alt="producto.nombre" />
            <div class="media-body ml-3">
              <h5>
                <u>{{ producto.nombre }}</u>
              </h5>
              <br />
              <p>
                Descripcion: <i>{{ producto.descripcion }}</i>
              </p>
              <p>
                Precio: <i>{{ producto.precio }}</i>
              </p>

              <div>
                <label for="cant">Cantidad</label>
                <input type="number" id="cant" v-model="cant[index]">
              </div>

              <button class="btn btn-info ml-3" @click="agregar(producto._id, cant[index])">
                Agregar al carrito
              </button>

            </div>
          </div>
        </div>

        <div v-else-if="!pidiendo" class="alert alert-warning msgNoHay">
          No hay Productos en venta
        </div>
      </div>
    </div>
  </section>
</template>

<script>

const urlServidor = 'http://localhost:3000/productos/'


export default {
  name: "src-components-productos-usuario",
  props: [],

  mounted() {
    this.getProductos()
  },
  data() {
    return {
      productos: [], 
      cant: [],
      pidiendo: true,
      carrito:[]
    };
  },
  methods: {
    async getProductos() {
      try {
        let res = await this.axios(urlServidor)
        this.productos = res.data
        console.log(res.data)
      }
      catch(error) {
        console.log('HTTP GET ERROR', error)
      }
      finally{
        this.pidiendo = false 
      }
    },
    agregar(id, cant){
      const prod = { idProd: id, cantidad: Number.parseInt(cant)}
      this.$store.dispatch('agregar', prod)
    },
    initCant(){
      for(let i=0; i<this.productos.length; i++){
        this.cant[i]=0
      }
    },
    /* agregar(id, cant){
      const prod = {
        idProd: id
        ,cantidad: cant
      } 
      this.carrito.push(prod)
    }, */
    verCarrito(){
      this.$router.push('/DetalleCarrito/')
    }
    

  },
  computed: {

  }
}
</script>

<style scoped lang="css">

</style>
