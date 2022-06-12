<template>
  <div class="client">
    <h1 class="title">Клиенты</h1>
    <div class="client__add">
      <router-link :to="{ name: 'AddClient' }">
        <ButtonDark>
          Добавить Клиента
        </ButtonDark>
      </router-link>
    </div>
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
export default {
  name: "Client",
  components: {ButtonDark, TableOrange},
  data(){
    return{
      dataClient: [],
      nameDataTable: ["Фамилия", "Имя", "Отчество", "Телефон", "email"],
      outputDataTable: ["surname", "name", "pat_name", "phone", "email"],
      nameDetail: "ClientDetail"
    }
  },
  methods: {
    async getDataClient(){
      try{
        const response = await axios.get('http://127.0.0.1:8001/client')
        this.dataClient = response.data
        console.log(this.dataClient)
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