<template>

  <section class="src-components-contador-vuex">
    <div class="jumbotron">
      <h2>ContadorVuex</h2>
      <hr />

      <h3>Contador: {{ mostrarContador }}</h3>
      <button class="btn btn-success m-2" @click="decrementar()">Decrementar</button>
      <button class="btn btn-success m-2" @click="incrementar()">Incrementar</button>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-contador-vuex',
    props: ['onContador'],
    mounted () {

    },
    data () {
      return {
        //contador : 456
      }
    },
    methods: {
        decrementar() {
          //this.contador--
          this.$store.dispatch('contarDown',2)
        },
        incrementar() {
          //this.contador++
          this.$store.dispatch('contarUp',3)
        }
    },
    computed: {
      mostrarContador() {
        //this.$emit('contador', this.contador)
        //return this.contador
        return this.$store.state.contador
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-contador-vuex {

  }

  .jumbotron {
      background-color: blueviolet;
      color: white;
  }

  hr {
      background-color: #ddd;
  }  
</style>
