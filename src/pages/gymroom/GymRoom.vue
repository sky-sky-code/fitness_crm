<template>
  <div class="gymroom">
    <h1>Залы</h1>
      <div class="gymroom_add d-inline-block">
        <router-link :to="{name: 'AddGymRoom'}">
          <ButtonDark>Добавить Зал</ButtonDark>
        </router-link>
      </div>
        <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getGymroom"/>
        <TableOrange
            :nameLink="nameDetial"
            :outputData="outputDataTable"
            :nameData="nameDataTable"
            :dataTable="dataGymroom"/>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
import FilterControl from "@/components/FilterControl";
export default {
  components: {ButtonDark, TableOrange, FilterControl},
  data(){
    return{
      dataGymroom: [],
      nameDataTable: ["Название", 'Фелилал', "Описание"],
      outputDataTable: ["name", "office", "description"],
      nameDetial: 'GymRoomDetial'
    }
  },
  methods: {
    async getGymroom(dataSearch){
      let urlQuery = 'http://127.0.0.1:8001/gymroom?'
      for (let key in dataSearch){
        urlQuery += `${key}=${dataSearch[key]}&`
      }
      try{
        let response = await axios.get(urlQuery)
        response.data.forEach((item, index, array) => {
          item['office'] = item['office']['name']
        })
        this.dataGymroom = response.data
        console.log(this.dataGymroom)
        urlQuery = 'http://127.0.0.1:8001/gymroom'
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getGymroom()
  }
}
</script>

<style scoped>

</style>