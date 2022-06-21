<template>

  <section class="src-components-padre">
      <div class="jumbotron" :style="{'background-color': colorDeFondo, color: colorDeTexto}">
        <h2>Componente {{ pasarAMayuscula('Padre') }}</h2>
        <h3>{{ subtitulo }}</h3>
        <hr />

        <button class="btn btn-success my-3" @click="incrementar()">Contador {{cont}}</button>

        <h5 class="alert alert-success">Contador del hijo {{ contHijo }}</h5>

        <Hijo :contador="cont" @contador="mostrarContHijo($event)" />

      </div>
  </section>

</template>

<script>

  import Hijo from './Hijo.vue'

  var miMixinLocal = {
    created: function() {
      this.saludo()
    },
    methods : {
      saludo : function() {
        console.log('Hola desde el mixin created')
      }
    }
  }
  import miMixinsExt from '../miMixins.js'
  import filters from '../filters.js'

  export default  {
    name: 'src-components-padre',
    mixins: [miMixinLocal, miMixinsExt, filters],
    components : {
      Hijo
    },
    props: ['contInicial','colorDeFondo','colorDeTexto','subtitulo'],
    mounted () {
      console.log('mounted padre')
    },
    data () {
      return {
        cont: Number(this.contInicial),
        contHijo : 0
      }
    },
    methods: {
      incrementar() {
        this.cont = this.cont + 1
      },
      mostrarContHijo(obj) {
        this.contHijo = obj.cont
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-padre {

  }

  .jumbotron {
    background-color: rgb(206, 192, 119);
    color: brown;
  }

  hr {
    background-color: #333;
  }  
</style>
