<template>
  <div>
      <button class="btn btn-dark">
        <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDark'
}
</script>

<style scoped>

.btn-dark:hover, .btn-dark:active {
  box-shadow: 0 2px 3px rgb(230, 28, 35);
}

</style>