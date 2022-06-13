<template>
  <h1>Абонемент</h1>
  <div class="subscription">
    <div class="subscription__add d-inline-block">
      <router-link :to="{name: 'AddSubscription'}">
        <ButtonDark>Добавить Абонимент</ButtonDark>
      </router-link>
    </div>
    <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getSubscription"/>
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
import FilterControl from "@/components/FilterControl";
export default {
  name: "Subscription",
  components: {ButtonDark, TableOrange, FilterControl},
  data(){
    return{
      dataSubscription: [],
      nameDataTable: ["Названия", "Направления", "Кол-во Занятий", "Срок Действия", "Цена"],
      outputDataTable: ['name', 'gym_lesson', 'quantity_gym_lesson', 'quantity_day', 'price'],
      nameDetail: 'SubscriptionDetail'
    }
  },
  methods: {
    async getSubscription(dataSearch){
      let urlQuery = 'http://127.0.0.1:8001/subscription?'
      for (let key in dataSearch){
        if (dataSearch[key] !== ""){
          urlQuery += `${key}=${dataSearch[key]}&`
        }
      }
      try{
        let response = await axios.get(urlQuery)
        response.data.forEach((item, index, array) =>{
          let gym_lesson = `${item.gym_lesson.name} (${item.gym_lesson.type})`
          item.gym_lesson = gym_lesson
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