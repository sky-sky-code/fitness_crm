<template>
  <div class="clientSub">
    <div class="add_clientSub">
      <router-link :to="{name: 'ClientSubscriptionAdd'}">
        <ButtonDark>Оформить абонимент</ButtonDark>
      </router-link>
    </div>
    <TableOrange
        :datatabel="dataClientSubscription"
        :nameData="nameDataTable"
        :outputData="outputDataTable" />
  </div>
</template>

<script>
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
export default {
  name: "ClientSubscription",
  props: ['uid'],
  components: {TableOrange, ButtonDark},
  data(){
    return{
      dataClientSubscription: [],
      nameDataTable: ['Дата активации', 'Дата окончания', 'Абонимент', 'Направления', "Цена,рублей"],
      outputDataTable: ["date_activation", "date_endings", "subscription", 'gym_lesson', 'price']
    }
  },
  methods: {
    async getClientSub(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/client/${this.uid}/purchased/subscription`)
        response.data.forEach(function (item, index, arr){
          let subscription = item['subscription']['name'] + `(${item['subscription']['gym_lesson']['type']})`
          let gym_lesson = item['subscription']['gym_lesson']['name']
          item['subscription'] = subscription
          item['gym_lesson'] = gym_lesson
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