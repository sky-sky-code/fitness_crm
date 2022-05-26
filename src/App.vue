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

a{
  text-decoration: none !important;
  font-size: 14px !important;
  color: #ef562f !important;
  font-weight: 500;
}

li {
  list-style-type: none; /* Убираем маркеры */
}
ul li{
  padding-left: 0;
  margin-bottom: 0;
  border: 0;
  vertical-align: baseline;
}

.office__detail{
  width: 50%;
}

.detail__item{
  display: flex;
  justify-content: space-around;
}

.detail__item .form-label{
  width: 25%;
}

.detail__button{
  display: flex;
  justify-content: space-between;
}

.form-control:focus, .form-select:focus{
  box-shadow: 0 2px 3px rgb(239, 86, 47) !important;
  border-color: #fff !important;
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