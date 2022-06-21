<template>

  <section class="src-components-http">
    <div class="jumbotron">
      <h2>Http</h2>
      <hr />

      <!-- <pre>{{alumnos}}</pre> -->

      <button class="btn btn-success mx-3" @click="getAlumnosAxios()">GET</button>
      <button class="btn btn-info mx-3" @click="postAlumnoAxios()">POST</button>

      <div class="media alert alert-info mt-4" v-for="(alumno, index) in alumnos" :key="index">
        <img :src="alumno.foto" width="250" :style="{'border-radius':'20px'}" :alt="alumno.nombre">

        <div class="media-body ml-3">
          <h4>Alumno {{index+1}} - ID: {{alumno.id}} - creado: {{formatearFecha(alumno.createdAt)}}</h4>
          <!-- <h4>Alumno {{index+1}} - ID: {{alumno.id}} - creado: {{ alumno.createdAt | formatearFecha}}</h4> -->
          <br>
          <p>Nombre: <b><a :href="alumno.foto">{{alumno.nombre}} {{alumno.apellido}}</a></b></p>
          <p>Edad: <i>{{alumno.edad}}</i></p>
          <p>curso: <i>{{alumno.curso?'Si':'No'}}</i></p>

          <button class="btn btn-warning m-3" @click="putAlumnoAxios(alumno.id)">PUT</button>
          <button class="btn btn-danger m-3" @click="deleteAlumnoAxios(alumno.id)">DELETE</button>

        </div>
      </div>

    </div>
  </section>

</template>

<script>
  import filters from '../filters.js'

  export default  {
    name: 'src-components-http',
    mixins : [filters],
    props: [],
    
    /* ------------------------------------------- */
    /*            Lifecycle Hooks                  */
    /* ------------------------------------------- */
    //https://es.vuejs.org/v2/guide/instance.html

    beforeCreate () {
      console.log('http -> beforeCreate')
    },
    created () {
      console.log('http -> created')
    },

    beforeMount () {
      console.log('http -> beforeMount')
    },
    mounted () {
      console.log('http -> mounted')
    },

    beforeUpdate () {
      console.log('http -> beforeUpdate')
    },
    updated () {
      console.log('http -> updated')
    },

    beforeUnmount () {
      console.log('http -> beforeUnmount')
    },
    unmounted () {
      console.log('http -> unmounted')
    },
    
    /* ------------------------------------------- */
    data () {
      return {
          url : 'https://5c8ef17a3e557700145e85c7.mockapi.io/alumnos/',
          alumnos : []
      }
    },
    methods: {
      /* ------------------------------------ */
      /*         API REST -> GET              */
      /* ------------------------------------ */
      getAlumnosAxios() {
          this.axios(this.url)
          .then(res => {
            console.log(res.data)
            this.alumnos = res.data
          })
          .catch(error => console.log('HTTP GET ERROR', error))
      },
      /* ------------------------------------ */
      /*         API REST -> POST             */
      /* ------------------------------------ */
      postAlumnoAxios() {
        let alumno = {
          nombre: "Daniel",
          apellido: "Sánchez",
          edad: 51,
          curso: true,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png"          
        }

        this.axios.post(this.url, alumno, {'content-type':'application/json'})
          .then(res => {
            let alumno = res.data
            console.log(alumno)
            this.alumnos.push(alumno)
          })
          .catch(error => console.log('HTTP POST ERROR', error))

      },
      /* ------------------------------------ */
      /*         API REST -> PUT              */
      /* ------------------------------------ */
      putAlumnoAxios(id) {
        console.log('put',id)

        let alumno = {
          nombre: "Ana",
          apellido: "Lopez",
          edad: 32,
          curso: false,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png"
        }

        this.axios.put(this.url+id, alumno, {'content-type':'application/json'})
          .then(res => {
            let alumno = res.data
            console.log(alumno)
            let offset = this.alumnos.findIndex(alumno => alumno.id == id)
            this.alumnos.splice(offset,1,alumno)
          })
          .catch(error => console.log('HTTP PUT ERROR', error))

      },
      /* ------------------------------------ */
      /*         API REST -> DELETE           */
      /* ------------------------------------ */
      deleteAlumnoAxios(id) {
        console.log('delete',id)

        this.axios.delete(this.url+id)
          .then(res => {
            let alumno = res.data
            console.log(alumno)
            let offset = this.alumnos.findIndex(alumno => alumno.id == id)
            this.alumnos.splice(offset,1)
          })
          .catch(error => console.log('HTTP DELETE ERROR', error))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color:blueviolet;
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: white;
  }

  .src-components-http {

  }
</style>
