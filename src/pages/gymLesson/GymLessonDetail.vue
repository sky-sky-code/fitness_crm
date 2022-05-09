<template>
  <div>
    <div class="gymlesson__detial">
      <div class="mb-3 detail__item">
        <label class="form-label">Название</label>
        <input type="text" v-model="dataGymLesson.name" class="form-control">
      </div>
      <div class="mb-3 detail__item">
        <span class="form-label">Выберите Тип Занятия</span>
        <select v-model="dataGymLesson.type" class="form-control">
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
    </div>
    <div class="detail__button">
      <ButtonDark @click="updateDetailGymLesson">Сохранить</ButtonDark>
      <ButtonRed @click="deleteDetailGymLesson">Удалить</ButtonRed>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";
export default {
  name: "GymLessonDetail",
  components: {ButtonRed, ButtonDark},
  props: ['uid'],
  data(){
    return{
      dataGymLesson: {},
      optionTypeSelect: ['персональное', 'групповое']
    }
  },
  methods: {
    async getDetailGymLesson(){
      try{
        const response = await axios.get(`http://127.0.0.1:8001/gymlesson/${this.$route.params.uid}`)
        this.dataGymLesson = response.data
        console.log(this.dataGymLesson)
      }catch (e){
        console.log(e)
      }
    },
    async deleteDetailGymLesson(){
      try{
        await axios.delete(`http://127.0.0.1:8001/gymlesson/${this.$route.params.uid}`)
        this.$router.push('/gymlesson')
      }catch (e){
        console.log(e)
      }
    },
    async updateDetailGymLesson(){
      try{
        delete this.dataGymLesson.uid
        delete this.dataGymLesson.subscriptions
        await axios.put(`http://127.0.0.1:8001/gymlesson/${this.$route.params.uid}`, this.dataGymLesson)
        this.$router.push('/gymlesson')
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getDetailGymLesson()
  }
}
</script>

<style scoped>

</style>