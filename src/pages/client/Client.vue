<template>
  <div class="client">
    <h1 class="title">Клиенты</h1>
    <div class="client__add d-inline-block">
      <router-link :to="{ name: 'AddClient' }">
        <ButtonDark>
          Добавить Клиента
        </ButtonDark>
      </router-link>
    </div>
    <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getDataClient"/>
    <TableOrange :dataTable="dataClient"
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
  name: "Client",
  components: {ButtonDark, TableOrange, FilterControl},
  data(){
    return{
      dataClient: [],
      nameDataTable: ["Фамилия", "Имя", "Отчество", "Телефон", "email"],
      outputDataTable: ["surname", "name", "pat_name", "phone", "email"],
      nameDetail: "ClientDetail"
    }
  },
  methods: {
    async getDataClient(dataSearch){
      let urlQuery = 'http://127.0.0.1:8001/client?'
      for (let key in dataSearch){
        urlQuery += `${key}=${dataSearch[key]}&`
      }
      try{
        const response = await axios.get(urlQuery)
        this.dataClient = response.data
        console.log(this.dataClient)
        urlQuery = 'http://127.0.0.1:8001/service?'
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getDataClient()
  }
}
</script>

<style scoped>


</style>