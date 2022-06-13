<template>
  <div class="gymLesson">
    <h1>Направления</h1>
    <div class="gymLesson_add d-inline-block">
      <router-link :to="{name: 'AddGymLesson'}">
        <ButtonDark>Добавить Направление</ButtonDark>
      </router-link>
    </div>
    <FilterControl :filterName="nameDataTable" :paramName="outputDataTable" @searchData="getGymLesson"/>
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
import FilterControl from "@/components/FilterControl";
export default {
  name: 'GymLesson',
  components: {ButtonDark, TableOrange, FilterControl},
  data(){
    return{
      dataGymLesson: [],
      nameDataTable: ["Названия", "Продолжительность", "Тип"],
      outputDataTable: ["name", "duration", "type"],
      nameLinkDetial: 'GymLessonDetial'
    }
  },
  methods: {
      async getGymLesson(dataSearch){
        let urlQuery = 'http://127.0.0.01:8001/gymlesson?'
        for (let key in dataSearch){
          urlQuery += `${key}=${dataSearch[key]}&`
        }
        console.log(urlQuery)
        try {
          const response = await axios.get(urlQuery)
          console.log(response.data)
          this.dataGymLesson = response.data
          urlQuery = 'http://127.0.0.01:8001/gymlesson?'
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