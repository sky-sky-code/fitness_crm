<template>
  <div>
    <button class="btn btn-red">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-red{
  background-color: rgb(230, 28, 35) !important;
  color: white !important;
}

.btn-red:hover, .btn-red:active {
  box-shadow: 0 2px 3px rgb(0, 0, 0);
}
</style>