<template>
  <h1>Оффисы</h1>
  <div class="office">
    <div class="office__add d-inline-block">
      <router-link to="/office/add">
        <ButtonDark>Добавить Фелиал</ButtonDark>
      </router-link>
    </div>
    <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getOffice"/>
    <TableOrange
        :nameLink="nameDetail"
        :nameData="nameDataTable"
        :outputData="outputDataTable"
        :dataTable="dataOffice"></TableOrange>
  </div>
</template>

<script>
import axios from "axios";
import TableOrange from "@/components/UI/TableOrange";
import ButtonDark from "@/components/UI/ButtonDark";
import FilterControl from "@/components/FilterControl";
export default {
  name: "Office",
  components: {ButtonDark, TableOrange, FilterControl},
  data(){
    return{
      dataOffice:[],
      nameDataTable: ['Название', "Адрес", "Телефон"],
      outputDataTable: ['name', 'address', 'phone'],
      nameDetail: 'officeDetail'
    }
  },
  methods: {
    async getOffice(dataSearch){
      let urlQuery = 'http://127.0.0.1:8001/office?'
      console.log(dataSearch)
      for (let key in dataSearch){
        urlQuery += `${key}=${dataSearch[key]}&`
      }
      console.log(urlQuery)
      try{
        const response = await axios.get(urlQuery)
        this.dataOffice = response.data
        console.log(this.dataOffice)
        urlQuery = 'http://127.0.0.1:8001/office?'
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getOffice()
  }
}
</script>

<style scoped>

</style>