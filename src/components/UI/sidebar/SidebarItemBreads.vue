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
  border-radius: 0 3px 3px 0;
  min-width: 160px;
  padding: 12px 16px;
  transform: translateX(-250px);
  transition: 0.5s;
}

.sidebar__item__listBreads li{
  margin-bottom: 5px;
}

.sidebar__item__listBreads  li a{
  text-decoration: none;
  color: #ef562f;
}

</style>