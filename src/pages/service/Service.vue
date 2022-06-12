<template>
  <h1>Услуги</h1>
  <div class="subscription">
    <div class="subscription__add">
      <router-link :to="{name: 'ServiceAdd'}">
        <ButtonDark>Добавить Услугу</ButtonDark>
      </router-link>
    </div>
    <TableOrange
        :dataTable="dataService"
        :nameData="nameDataTable"
        :outputData="outputDataTable"
        :nameLink="nameDetail"/>
  </div>
</template>

<script>
import TableOrange from "@/components/UI/TableOrange";
import ButtonDark from "@/components/UI/ButtonDark";
import axios from "axios";
export default {
  name: "Service",
  components: {TableOrange, ButtonDark},
  data(){
    return{
      dataService: [],
      nameDataTable: ["Названия", "Цена"],
      outputDataTable: ['name', 'price'],
      nameDetail: 'ServiceDetail'
    }
  },
  methods: {
    async getService(){
      try{
        let response = await axios.get('http://127.0.0.1:8001/service')
        this.dataService = response.data
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getService()
  }
}
</script>

<style scoped>

</style>