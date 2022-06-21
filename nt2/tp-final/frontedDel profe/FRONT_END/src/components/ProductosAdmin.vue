<template>
  <section class="src-components-estructura">
    <div class="jumbotron">
      <h2>Directivas Estructurales</h2>
      <hr />
      <div>
        <button class="btn btn-success my-3" @click="mostrar=!mostrar">Agregar Producto</button>
        <div>
           <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- ------------ -->
          <!-- CAMPO NOMBRE -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="v.f.nombre.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="v.f.nombre.$error && v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-if="v.f.nombre.minLength.$invalid">Este campo debe tener al menos {{v.f.nombre.minLength.$params.length}} caracteres</div>
                    <div v-if="v.f.nombre.maxLength.$invalid">Este campo debe tener máximo {{v.f.nombre.maxLength.$params.max}} caracteres</div>
                    <div v-if="v.f.nombre.conEspacios.$invalid">No se permiten espacios en este campo</div>
                </div>
          </div>
           <!-- ------------- -->
        <!-- CAMPO DESCRIPCION -->
          <!-- ------------- -->
           <div class="form-group">
                <label for="descripcion">descripcion</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    v-model="v.f.descripcion.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="v.f.descripcion.$error && v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.descripcion.required.$invalid">Este campo es requerido</div>
                    <div v-if="v.f.descripcion.minLength.$invalid">Este campo debe tener al menos {{v.f.descripcion.minLength.$params.length}} caracteres</div>
                    <div v-if="v.f.descripcion.maxLength.$invalid">Este campo debe tener máximo {{v.f.descripcion.maxLength.$params.max}} caracteres</div>
                    <div v-if="v.f.descripcion.conEspacios.$invalid">No se permiten espacios en este campo</div>
                </div>
          </div>
          <!-- ------------ -->
          <!--  CAMPO PRECIO -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="precio">precio</label>
                <input 
                    type="number"
                    id="precio"
                    class="form-control"
                    v-model.number="v.f.precio.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="v.f.precio.$error && v.f.precio.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.precio.required.$invalid">Este campo es requerido</div>
                    <!-- <div v-if="v.f.precio.between.$invalid">La precio debe estar entre los {{v.f.precio.between.$params.min}} y los {{v.f.precio.between.$params.max}} años</div> -->
                    <div v-if="v.f.precio.between.$invalid">{{v.f.precio.between.$message}}</div>
                </div>
          </div>
         
          <!-- ------------ -->
          <!-- BOTÓN ENVÍO  -->
          <!-- ------------ -->
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="v.$invalid"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
        </form>
        </div>
      </div>
      <div
        class="media alert alert-warning"
        v-for="(producto, index) in productos"
        :key="index"
      >
        <img :src="producto.imagen" width="200" :alt="producto.nombre" />
        <div class="media-body ml-3">
          <h5>
            <u>producto {{ index + 1 }}</u>
          </h5>
          <br />
          <p>Nombre: {{ producto.nombre }}</p>
          <p>
            descripcion: <i>{{ producto.descripcion }}</i>
          </p>
          <p>
            precio: <i>{{ producto.precio }}</i>
          </p>
          <!--  Hizo el curso <input type="checkbox" v-model="alumno.curso" /> -->
          <button class="btn btn-danger ml-3" @click="borrar(index)">
            Borrar
          </button>
        </div>
      </div>   
   </div>   
  </section>
</template>

<script>

export default {
  name: "src-components-estructura",
  props: [],
  mounted() {
    /* this.getProductos() */
  },
  data() {
    return {
      /* url: 'http://localhost:3000/productos/',
      productos: []  */
      mostrar: false,
      productos: [
        {
            _id: 1,
            nombre: "Coca-Cola",
            descripcion: "Coca-Cola de 1,5L",
            precio: 150,
            imagen: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080015_f.jpg"
        },
        {
            _id: 2,
            nombre: "Papas Lays",
            descripcion: "papas fritas embolsadas de 70grs",
            precio: 100,
            imagen: "https://dojiw2m9tvv09.cloudfront.net/32355/product/lays704235.jpg"
        },
        {
            _id: 3,
            nombre: "Mayonesa Natura",
            descripcion: "Mayonesa de 2900 cm/3",
            precio: 70,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_871943-MLA43989086323_112020-O.webp"
        }
      ],
      f: {
        nombre: '',
        edad : '',
        email : ''
      },
      v : null,
      /* url : 'https://5c8ef17a3e557700145e85c7.mockapi.io/datosform' */
    }
    
  },
  created() {
        const rules = {
          f: {
            nombre: { 
              required,
              conEspacios: validarEspacios,
              minLength: minLength(3),
              maxLength: maxLength(15)
            },
            descripcion: { 
              required,
              between: between(18,100)
            },
            precio: { 
              required,

            }
          }
        }

        const f = this.f
        this.v = useVuelidate(rules, {f})
  },

  methods: {
   /*  async getProductos() {
        try {
          let res = await this.axios(this.url)
          console.log(res.data)
        }
        catch(error) {
          console.log('HTTP GET ERROR', error)
        }
    }, */
      delay : ms => new Promise(resolve => setTimeout(resolve, ms)),

        /* ----------------- AXIOS CON THEN CATCH ----------------------- */
        /* Envio de datos del formularioVue al backend */
      async sendDatosFormAxios(datos) {
          try {
            let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
            await this.delay(500)
            console.log(res.data)
          }
          catch(error) {
            console.log('HTTP POST ERROR', error)
          }
      },

      /* Pedido de datos almacenados en el backend */
      async getDatosFormAxios() {
          try {
            let res = await this.axios(this.url)
            console.log(res.data)
          }
          catch(error) {
            console.log('HTTP GET ERROR', error)
          }
      },

      /* Submit del form */
      async enviar() {
          this.v.$touch()
          if(!this.v.$invalid) {
            let form = this.f
            console.log(form)
            await this.sendDatosFormAxios(form)
            this.resetForm()
            this.v.$reset()
          }
      },
      
      /* valor inicial de los campos de datos del formularioVue */
      resetForm() {
          this.v.f.nombre.$model = ''
          this.v.f.edad.$model = ''
          this.v.f.email.$model = ''
      }
  },
         
  computed: {
   
  },
};
</script>

<style scoped lang="css">
    /* .src-components-estructura {
    } */

    .jumbotron {
    background-color: rgb(167, 39, 64);
    color: white;
    }

    hr {
    background-color: #ddd;
    }

    .table td, .table th {
        vertical-align: middle;
    }
</style>
