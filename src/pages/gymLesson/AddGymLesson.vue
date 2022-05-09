<template>
  <FormControl :dataSave="dataGymLesson" :urlSave="urlSave">
    <div class="mb-3">
      <label  class="form-label">Название</label>
      <input v-model="dataGymLesson.name" class="form-control" >
    </div>
    <div class="mb-3">
      <label class="form-label">Выберите Тип Занятия</label>
      <select v-model="dataGymLesson.type" @change="changeOption" class="form-control">
        <option v-for="selectedType in optionTypeSelect" :key="selectedType" :value="selectedType">
          {{ selectedType }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="time">Время: </label>
      <br>
      <input v-model="dataGymLesson.duration" type="time" id="time" name="time"/>
    </div>
  </FormControl>
</template>

<script>
import FormControl from "@/components/FormControl";
export default {
  name: "AddGymLesson",
  components: {FormControl},
  data(){
    return{
      dataGymLesson:{
        name: null,
        type: 'групповое',
        duration: null,
      },
      urlSave: 'http://127.0.0.1:8001/gymlesson',
      optionTypeSelect: ['персональное', 'групповое']

    }
  }
}
</script>

<style scoped>

</style>