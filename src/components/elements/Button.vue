<template>
  <button @click="$emit('click', $event)">
    <!--
      @slot Texto do botão
      @mock Click me
     -->
    <slot>Click me</slot>
  </button>
</template>

<script>
/**
 * Componente padrão de botão
 */

export default {
  name: "Button",
  props: {
    /**
     * Cores do botão
     * @values primary, secondary, error, success
     */
    color: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    /**
     * Função que incrementa em 1 o valor passado
     * @param {Number} param1 númeral a ser incrementado
     * @returns {Number}
     */
    add(param1) {
      return param1 + 1;
    },
  },
};
</script>

<docs>
  ```vue live
  <Button>Botão teste</Button>
  ```
</docs>
