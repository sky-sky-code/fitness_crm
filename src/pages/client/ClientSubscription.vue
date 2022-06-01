<template>
  <div class="clientSub">
    <div class="add_clientSub">
      <router-link :to="{name: 'ClientSubscriptionAdd'}">
        <ButtonDark>Оформить абонимент</ButtonDark>
      </router-link>
    </div>
    <NavClient class="mt-3"/>
    <TableOrange
        :nameLink="nameDetail"
        :nameData="nameDataTable"
        :outputData="outputDataTable"
        :dataTable="dataClientSubscription"></TableOrange>
  </div>
</template>

<script>
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import NavClient from "@/components/UI/navbar/NavClient";
export default {
  name: "ClientSubscription",
  props: ['uid'],
  components: {TableOrange, ButtonDark, NavClient},
  data(){
    return{
      dataClientSubscription: [],
      nameDataTable: ['Абонимент', 'Дата активации', 'Дата окончания', 'Направления', "Цена,рублей"],
      outputDataTable: ["subscription", "date_activation", "date_endings", 'gym_lesson', 'price'],
      nameDetail: 'ClientSubscriptionDetail'
    }
  },
  methods: {
    async getClientSub(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/client/${this.uid}/purchased/subscription`)
        response.data.forEach(function (item, index, arr){
          let subscription = item['subscription']['name'] + `(${item['subscription']['gym_lesson']['type']})`
          let gym_lesson = item['subscription']['gym_lesson']['name']
          let price = item['subscription']['price']
          item['subscription'] = subscription
          item['gym_lesson'] = gym_lesson
          item['price'] = price
        });
        this.dataClientSubscription = response.data
        console.log(this.dataClientSubscription)
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getClientSub()
  }
}
</script>

<style scoped>

</style>