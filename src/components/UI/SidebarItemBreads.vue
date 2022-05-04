<template>
  <div class="menu__listBreads">
    <ul class="sidebar__item__listBreads">
      <li v-for="item in listBreads" :key="item.name">
        <router-link :to="item.route">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarItemBreads',
  props: {
    listBreads:{
      type: Array
    }
  }

}
</script>

<style>

.menu__listBreads{
  display: none;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 3px 4px 0px rgba(239, 86, 47);
  padding: 12px 16px;
  z-index: 1;
  transform: translateX(-250px);
  transition: 0.3s;
}

.sidebar__item__listBreads > li{
  text-decoration: none;
}

/*li{*/
/*  margin-left: 5px;*/
/*}*/



</style>