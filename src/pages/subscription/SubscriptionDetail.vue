<template>
  <div>
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
                :value="selectGymLesson.uid">{{ selectGymLesson.name }}</option>
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
    <div class="detail__button">
      <ButtonDark @click="updateDetailSubscription">Сохранить</ButtonDark>
      <ButtonRed @click="deleteDetailSubscription">Удалить</ButtonRed>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";
export default {
  name: "SubscriptionDetail",
  components: {ButtonDark, ButtonRed},
  props: ['uid'],
  data(){
    return{
      dataSubscription:{},
      dataSelectGymLesson: [],
    }
  },
  methods: {
    async getSubscription(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/subscription/${this.$route.params.uid}`)
        response.data.gym_lesson_id = response.data.gym_lesson.uid
        delete response.data.gym_lesson
        this.dataSubscription = response.data
      }catch (e){
        console.log(e)
      }
    },
    async getSelectGymLesson(){
      try{
        const response = await axios.get('http://127.0.0.1:8001/gymlesson')
        this.dataSelectGymLesson = response.data
      }catch (e){
        console.log(e)
      }
    },
    async updateDetailSubscription(){
      try{
        delete this.dataSubscription.uid
        await axios.put(`http://127.0.0.1:8001/subscription/${this.$route.params.uid}`, this.dataSubscription)
        this.$router.push('/subscription')
      }catch (e){
        console.log(this.dataSubscription)
        console.log(e)
      }
    },
    async deleteDetailSubscription(){
      try{
        await axios.delete(`http://127.0.0.1:8001/subscription/${this.$route.params.uid}`)
        this.$router.push('/subscription')
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getSubscription();
    this.getSelectGymLesson();
  }
}
</script>

<style scoped>

</style>