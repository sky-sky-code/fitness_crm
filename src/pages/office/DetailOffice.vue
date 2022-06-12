<template>
  <h1>Данные Оффиса</h1>
    <div class="office__detail">
    <div class="mb-3 detail__item">
      <label class="form-label">Названия</label>
      <input type="text" v-model="dataOffice.name" class="form-control">
    </div>
    <div class="mb-3 detail__item">
      <label class="form-label">Адрес</label>
      <input type="text" v-model="dataOffice.address" class="form-control">
    </div>
    <div class="mb-3 detail__item">
      <label class="form-label">Телефон</label>
      <input type="text" v-model="dataOffice.phone" class="form-control">
    </div>
    <div class="detail__button">
      <ButtonDark @click="updateDetailOffice">Сохранить</ButtonDark>
      <ButtonRed @click="deleteDetailOffice">Удалить</ButtonRed>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";

export default {
  name: "DetialOffice",
  components: {ButtonRed, ButtonDark},
  props: ['uid'],
  data(){
    return{
      dataOffice: {}
    }
  },
  methods:{
    async getDetailOffice(){
      try{
        const response = await axios.get(`http://localhost:8001/office/${this.$route.params.uid}`)
        this.dataOffice = response.data
      }catch (e){
       console.log(e)
      }
    },
    async deleteDetailOffice(){
      try{
        await axios.delete(`http://localhost:8001/office/${this.$route.params.uid}`)
        this.$router.push('/office');
      }catch (e){
        console.log(e)
      }
    },
    async updateDetailOffice(){
      try{
        delete this.dataOffice.uid
        delete this.dataOffice.gymrooms
        delete this.dataOffice.purchasedsubscriptions
        console.log(this.dataOffice)
        await axios.put(`http://localhost:8001/office/${this.$route.params.uid}`, this.dataOffice)
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getDetailOffice()
  }
}
</script>

<style scoped>

</style>