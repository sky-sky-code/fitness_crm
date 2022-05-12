<template>
  <div class="client_detail">
    <navbar class="nav">
      <div class="client__nav">
        <div class="nav__item" v-for="item in navDataClient" :key="item">
          <router-link :to="item.route">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
export default {
  name: "ClientDetail",
  data(){
    return{
      navDataClient: [
          {name: "Данные", route: {name: 'ClientDetail'}},
          {name: "Абонимент", route: {name: "ClientSubscription"}}
      ]
    }
  }
}
</script>

<style scoped>

.nav{
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
}

.client__nav{
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.nav__item{
  padding: 10px;
  transition: all 0.2s;
}

.nav__item:hover{
  background-color: #ef562f;
  color: white;
}

</style>