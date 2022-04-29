<template>
  <div class="app">
    <Sidebar/>
  </div>
</template>


<script>
import Sidebar from '@/components/UI/Sidebar'
export default {
  components: {Sidebar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

li {
  list-style-type: none; /* Убираем маркеры */
}
ul {
  margin-left: 0; /* Отступ слева в браузере IE и Opera */
  padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
}

.app{
  display: flex;
}

</style>