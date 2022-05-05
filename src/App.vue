<template>
  <div class="app">
    <sidebar/>
    <div class="section">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Sidebar from "@/components/UI/sidebar/Sidebar";
export default {
  components: {Sidebar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}

li {
  list-style-type: none; /* Убираем маркеры */
}
ul li{
  padding: 0;
  margin-bottom: 0;
  border: 0;
  vertical-align: baseline;
}
.btn-dark:hover, .btn-dark:focus, .btn-dark:active {
  box-shadow: 0 2px 3px rgb(230, 28, 35);
  border: rgb(230, 28, 35);
}


.app{
  width: 100%;
  display: flex;
}

.section{
  width:100%;
  overflow: hidden;
  padding:40px;
}

</style>