<template>
  <button>
    <slot>Click</slot>
  </button>
</template>

<script>
/**
 * Componente padrão de botão
 */

export default {
  name: "Button",
};
</script>

<docs>
  ```vue live
  <Button>Botão teste</Button>
  ```
</docs>
