<template>

  <section class="src-components-formularioVue">

    <div class="jumbotron">
      <h2>Formulario Vuelidate</h2>
      <hr />

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
          <!-- ------------ -->
          <!--  CAMPO EDAD  -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="edad">Edad</label>
                <input 
                    type="number"
                    id="edad"
                    class="form-control"
                    v-model.number="v.f.edad.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="v.f.edad.$error && v.f.edad.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.edad.required.$invalid">Este campo es requerido</div>
                    <!-- <div v-if="v.f.edad.between.$invalid">La edad debe estar entre los {{v.f.edad.between.$params.min}} y los {{v.f.edad.between.$params.max}} años</div> -->
                    <div v-if="v.f.edad.between.$invalid">{{v.f.edad.between.$message}}</div>
                </div>
          </div>
          <!-- ------------- -->
          <!--  CAMPO EMAIL  -->
          <!-- ------------- -->
          <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="v.f.email.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="v.f.email.$error && v.f.email.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.email.required.$invalid">Este campo es requerido</div>
                    <div v-if="v.f.email.email.$invalid">Debe proveer un email válido</div>
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

      <!-- <pre>{{v}}</pre> -->

    </div>

  </section>

</template>

<script>
  import { required, minLength, maxLength, between, email } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  function validarEspacios(value) {
    return !value.includes(' ')
  }

  export default  {
    name: 'src-components-formularioVue',
    props: [],
    mounted () {
        //this.getDatosFormFetch()
        this.getDatosFormAxios()
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
            edad: { 
              required,
              between: between(18,100)
            },
            email: { 
              required,
              email
            }
          }
        }

        const f = this.f
        this.v = useVuelidate(rules, {f})
    },
    data () {
      return {
          f: {
               nombre: '',
               edad : '',
               email : ''
          },
          v : null,
          url : 'https://5c8ef17a3e557700145e85c7.mockapi.io/datosform'
      }
    },
    methods: {

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

    }
}


</script>

<style scoped lang="css">
  .src-components-formularioVue {

  }

  .jumbotron {
    background-color: rgb(114, 19, 51);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: white;
  }

</style>
