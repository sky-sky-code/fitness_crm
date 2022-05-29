<template>
  <FormControl :dataSave="dataSubscription" :urlSave="urlSave">
      <div class="mb-3">
        <label class="form-label">Название</label>
        <input type="text" v-model="dataSubscription.name" class="form-control"  placeholder="Введите навазние Абонимента">
      </div>
      <div class="mb-3">
        <label class="form-label">Количество Занятий</label>
        <input type="number" v-model="dataSubscription.quantity_gym_lesson" class="form-control" >
      </div>
      <div class="mb-3">
        <label class="form-label">Направление</label>
        <select v-model="dataSubscription.gym_lesson_id" class="form-select">
          <option v-for="selectGymLesson in dataSelectGymLesson"
                  :key="selectGymLesson.uid"
                  :value="selectGymLesson.uid">{{ selectGymLesson.name }} ({{ selectGymLesson.type }})</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Срок действия, Дней</label>
        <input type="number" v-model="dataSubscription.quantity_day" class="form-control" >
      </div>
      <div class="mb-3">
        <label class="form-label">Цена</label>
        <input type="number" v-model="dataSubscription.price" class="form-control" >
      </div>
      <div class="mb-3">
        <div class="form-floating">
          <textarea class="form-control" v-model="dataSubscription.description"
                placeholder="Leave a description here" style="height: 100px"></textarea>
          <label>Примечание</label>
        </div>
      </div>
  </FormControl>
</template>

<script>
import FormControl from "@/components/FormControl";
import axios from "axios";
export default {
  name: "AddSubscription",
  components: {FormControl},
  data(){
    return{
      dataSubscription:{
        name: null,
        quantity_gym_lesson: null,
        quantity_day: null,
        price: null,
        gym_lesson_id: null,
        description: null,
      },
      urlSave: 'http://127.0.0.1:8001/subscription',
      dataSelectGymLesson: []
    }
  },
  methods:{
    async getSelectGymLesson(){
      try{
        const response = await axios.get('http://127.0.0.1:8001/gymlesson')
        this.dataSelectGymLesson = response.data
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getSelectGymLesson()
  }
}
</script>

<style scoped>

</style>