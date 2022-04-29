<template>
  <aside class="sidebar">
    <img src="" alt="">
    <div class="sidebar__content">
      <SidebarItem/>
    </div>
  </aside>
</template>

<script>
import SidebarItem from "@/components/UI/SidebarItem";
export default {
  components: {SidebarItem},
  data() {
    return {

    };
  }
};
</script>

<style>
.sidebar{
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

</style>