<template>
  <div class="office">
    <div class="office__add">
      <router-link to="/office/add">
        <ButtonDark>Добавить Фелиал</ButtonDark>
      </router-link>
    </div>
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
export default {
  name: "Office",
  components: {ButtonDark, TableOrange},
  data(){
    return{
      dataOffice:[],
      nameDataTable: ['Название', "Адрес", "Телефон"],
      outputDataTable: ['name', 'address', 'phone'],
      nameDetail: 'officeDetail'
    }
  },
  methods: {
    async getOffice(){
      try{
        const response = await axios.get('http://localhost:8001/office')
        this.dataOffice = response.data
        console.log(this.dataOffice)
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