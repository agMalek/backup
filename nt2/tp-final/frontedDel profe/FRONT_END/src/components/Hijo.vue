<template>

  <section class="src-components-hijo">
      <div class="jumbotron">
        <h2>Componente {{ wrap(reverse(pasarAMayuscula('Hijo')),'ini ->','* fin') }}</h2>
        <hr />

        <button class="btn btn-warning my-3" @click="incrementar()">Contador {{cont}}</button>

        <h5 class="alert alert-success">Contador del padre {{ contador }}</h5>

      </div>
  </section>

</template>

<script>
  import filters from '../filters.js'

  export default  {
    name: 'src-components-hijo',
    mixins : [filters],
    //props: ['contador','onContador'],
    /* props: {
      contador: Number,
      onContador : Function
    }, */
    props: {
      contador: {
        type: Number,
        required : true
      },
      onContador : {
        type: Function,
        required: true
      }
    },
    mounted () {

    },
    data () {
      return {
        cont: 0
      }
    },
    methods: {
      incrementar() {
        this.cont++
        let obj = {cont: this.cont}
        this.$emit('contador', obj)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-hijo {

  }

  .jumbotron {
    /* background-color: rgb(93, 158, 33); */
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#c9de96+0,8ab66b+44,398235+100;Green+3D+%233 */
    background: #c9de96; /* Old browsers */
    background: -moz-linear-gradient(top,  #c9de96 0%, #8ab66b 44%, #398235 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #c9de96 0%,#8ab66b 44%,#398235 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #c9de96 0%,#8ab66b 44%,#398235 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c9de96', endColorstr='#398235',GradientType=0 ); /* IE6-9 */
    
    color: white;
  }

  hr {
    background-color: #333;
  }    
</style>
