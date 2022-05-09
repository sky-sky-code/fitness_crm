<template>
  <div class="gymLesson">
    <div class="gymLesson_add">
      <router-link :to="{name: 'AddGymLesson'}">
        <ButtonDark>Добавить Направление</ButtonDark>
      </router-link>
    </div>
    <TableOrange
        :nameLink="nameLinkDetial"
        :nameData="nameDataTable"
        :outputData="outputDataTable"
        :dataTable="dataGymLesson"></TableOrange>

  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import TableOrange from "@/components/UI/TableOrange";
import axios from "axios";
export default {
  name: 'GymLesson',
  components: {ButtonDark, TableOrange},
  data(){
    return{
      dataGymLesson: [],
      nameDataTable: ["Названия", "Продолжительность", "Тип"],
      outputDataTable: ["name", "duration", "type"],
      nameLinkDetial: 'GymLessonDetial'
    }
  },
  methods: {
      async getGymLesson(){
        try {
          const response = await axios.get('http://127.0.0.01:8001/gymlesson')
          console.log(response.data)
          this.dataGymLesson = response.data
        }catch (e){
          console.log(e)
        }
      }
  },
  mounted() {
    this.getGymLesson()
  }
}
</script>

<style scoped>

</style>