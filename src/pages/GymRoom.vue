<template>
  <div class="gymroom">
      <div class="gymroom_add">
        <router-link to="">
          <ButtonDark>Добавить Зал</ButtonDark>
        </router-link>
        <TableOrange
            :nameLink="nameDetial"
            :outputData="outputDataTable"
            :nameData="nameDataTable"
            :dataTable="dataGymroom"/>

      </div>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
export default {
  components: {ButtonDark, TableOrange},
  data(){
    return{
      dataGymroom: [],
      nameDataTable: ["Название", 'Фелилал', "Описание"],
      outputDataTable: ["name", "office", "description"],
      nameDetial: 'GymRoomDetial'
    }
  },
  methods: {
    async getGymroom(){
      try{
        let response = await axios.get('http://127.0.0.1:8001/gymroom')
        response.data.forEach((item, index, array) => {
          item['office'] = item['office']['name']
        })
        this.dataGymroom = response.data
        console.log(this.dataGymroom)
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