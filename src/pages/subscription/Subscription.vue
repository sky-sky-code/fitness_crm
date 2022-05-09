<template>
  <div class="subscription">
    <div class="subscription__add">
      <router-link :to="{name: 'AddSubscription'}">
        <ButtonDark>Добавить Абонимент</ButtonDark>
      </router-link>
    </div>
    <TableOrange
        :dataTable="dataSubscription"
        :nameData="nameDataTable"
        :outputData="outputDataTable"
        :nameLink="nameDetail"/>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
export default {
  name: "Subscription",
  components: {ButtonDark, TableOrange},
  data(){
    return{
      dataSubscription: [],
      nameDataTable: ["Названия", "Направления", "Кол-во Занятий", "Срок Действия", "Цена"],
      outputDataTable: ['name', 'gym_lesson', 'quantity_gym_lesson', 'quantity_day', 'price'],
      nameDetail: 'SubscriptionDetail'
    }
  },
  methods: {
    async getSubscription(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/subscription`)
        response.data.forEach((item, index, array) =>{
          item.gym_lesson = item.gym_lesson.type
        })
        this.dataSubscription = response.data
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getSubscription()
  }
}
</script>

<style scoped>

</style>