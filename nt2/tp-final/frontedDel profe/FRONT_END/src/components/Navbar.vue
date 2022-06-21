<template>

  <section class="src-components-navbar">

    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      
      <router-link to="/">
        <!-- <a class="navbar-brand" href="#">Inicio {{contador}}</a> -->
        <a class="navbar-brand" href="#">Inicio {{$store.state.contador}}</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/binding">
              <a class="nav-link" href="#">Binding</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/ProductosAdmin">
              <a class="nav-link" href="#">Productos Admin</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/atributos">
              <a class="nav-link" href="#">Atributos</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/formulariovue">
              <a class="nav-link" href="#">Formulario Vue</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/http">
              <a class="nav-link" href="#">Http</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/padre/123/darkred/white/Ejemplo Contador">
              <a class="nav-link" href="#">Padre</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    //props: ['contador'],
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
