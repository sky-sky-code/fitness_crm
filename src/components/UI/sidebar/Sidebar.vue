<template>
  <aside class="sidebar">
    <img class="logo" src="https://www.clipartmax.com/png/full/427-4278400_phoenix-flag-clipart-beach-black-phoenix-logo-png.png" alt="">
    <div class="sidebar__content">
      <SidebarItem/>
    </div>
  </aside>
</template>

<script>
import SidebarItem from "@/components/UI/sidebar/SidebarItem";
export default {
  components: {SidebarItem},
  data() {
    return {

    };
  }
};
</script>

<style>
.logo{
  align-self:center;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
}

.sidebar{
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

</style>