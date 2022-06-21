<template>
  <section class="src-components-atributos">
    <div class="jumbotron">
      <h2>Directivas de Atributo</h2>
      <hr />

      <h4><u>:style</u></h4>

      <button class="btn btn-info my-3" @click="estado1 = !estado1">
        Cambiar
      </button>
      <p
        :style="{
          color: 'white',
          'background-color': estado1 ? 'green' : 'red',
          borderRadius: '10px',
          padding: '10px',
        }"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        perferendis a at corrupti porro, quos esse vitae amet nobis praesentium
        accusantium facilis veniam eveniet quibusdam in facere necessitatibus
        culpa! Quibusdam!
      </p>

      <h4><u>:class</u></h4>

      <button class="btn btn-info my-3" @click="estado2 = !estado2">
        Cambiar
      </button>
      <!-- <p :class="{'text-white':true, 'bg-success': estado2, 'bg-danger': !estado2, 'p-2': true}"> -->
      <p
        :class="[
          'text-white',
          { 'bg-success': estado2, 'bg-danger': !estado2 },
          'p-2',
        ]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        perferendis a at corrupti porro, quos esse vitae amet nobis praesentium
        accusantium facilis veniam eveniet quibusdam in facere necessitatibus
        culpa! Quibusdam!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-atributos",
  props: [],
  mounted() {},
  data() {
    return {
      estado1: true,
      estado2: true      
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: rgb(23, 102, 23);
    color: white;
  }

  hr {
    background-color: #ddd;
  }
</style>
