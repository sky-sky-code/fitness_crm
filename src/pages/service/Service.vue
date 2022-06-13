<template>
  <h1>Услуги</h1>
  <div class="subscription">
    <div class="subscription__add d-inline-block">
      <router-link :to="{name: 'ServiceAdd'}">
        <ButtonDark>Добавить Услугу</ButtonDark>
      </router-link>
    </div>
    <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getService"/>
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
import FilterControl from "@/components/FilterControl";
export default {
  name: "Service",
  components: {TableOrange, ButtonDark, FilterControl},
  data(){
    return{
      dataService: [],
      nameDataTable: ["Названия", "Цена"],
      outputDataTable: ['name', 'price'],
      nameDetail: 'ServiceDetail'
    }
  },
  methods: {
    async getService(dataSearch){
      let urlQuery = 'http://127.0.0.1:8001/service?'
      console.log(dataSearch)
      for (let key in dataSearch){
        if (dataSearch[key] !== ""){
          urlQuery += `${key}=${dataSearch[key]}&`
        }
      }
      try{
        let response = await axios.get(urlQuery)
        this.dataService = response.data
        console.log(urlQuery)
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