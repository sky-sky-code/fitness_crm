<template>
  <h1>Все Купленные Абонементы</h1>
  <TableOrange
      :dataTable="dataPurchasedSubscription"
      :nameData="nameDataTable"
      :outputData="outputDataTable"
      :nameLink="nameDetail"/>
</template>

<script>
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
export default {
  name: 'SubscriptionPurchased',
  components: {TableOrange},
  data(){
    return{
      dataPurchasedSubscription: [],
      nameDataTable: ["Абонимент", "Дата продажи", "Направления", "Клиент", "Цена, рублей", "Филиал"],
      outputDataTable: ['subscription', 'date_sale', 'gym_lesson', 'client', 'price', 'office'],
      nameDetail: 'ClientSubscriptionDetail'
    }
  },
  methods: {
    async getPurchasedSubscription(){
      try{
        let response = await axios.get('http://127.0.0.1:8001/subscription/purchased')
        response.data.forEach(function (item, index, arr){
            item['gym_lesson'] = item['subscription']['gym_lesson']['name']
            item['price'] = item['subscription']['price']
            item['subscription'] = item['subscription']['name']
            item['office'] = item['office']['name']
            item['client'] = item['client']['name']
        });
        console.log(response.data)
        this.dataPurchasedSubscription = response.data
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getPurchasedSubscription()
  }
}
</script>

<style scoped>

</style>