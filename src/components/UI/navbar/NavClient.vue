<template>
  <navbar class="nav mb-3">
    <div class="client__nav">
      <div class="nav__item" v-for="item in navDataClient" :key="item">
        <router-link :to="item.route">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </navbar>
</template>

<script>
export default {
  name: 'NavClient',
  data(){
    return{
      navDataClient: [
        {name: "Данные", route: {name: 'ClientDetail'}},
        {
          name: "Абонемент",
          route: {
            name: "ClientSubscription",
            params: {subscriptionsClient: this.subscriptionsClient}
          }
        },
        {name: "Услуги", route: {name: ""}}
      ]
    }
  }
}
</script>

<style scoped>


.nav{
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.client__nav{
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.nav__item{
  padding: 10px;
  transition: all 0.2s;
  border-radius: 5px;
}

.nav__item:hover{
  background-color: #ef562f;
}

.nav__item:hover a{
  color: white !important;
}

</style>