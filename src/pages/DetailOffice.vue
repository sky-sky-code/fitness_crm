<template>
  <div>
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
      <button @click="updateDetailOffice" class="btn btn-dark">Сохранить</button>
      <button @click="deleteDetailOffice" class="btn btn-orange">Удалить</button>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetialOffice",
  props: ['officeUid'],
  data(){
    return{
      dataOffice: {}
    }
  },
  methods:{
    async getDetailOffice(){
      try{
        const response = await axios.get(`http://localhost:8001/office/${this.$route.params.officeUid}`)
        this.dataOffice = response.data
      }catch (e){
       console.log(e)
      }
    },
    async deleteDetailOffice(){
      try{
        await axios.delete(`http://localhost:8001/office/${this.$route.params.officeUid}`)
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
        await axios.put(`http://localhost:8001/office/${this.$route.params.officeUid}`, this.dataOffice)
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

.office__detail{
  width: 50%;
}

.detail__item{
  display: flex;
  justify-content: space-around;
}

.detail__item .form-label{
  width: 25%;
}

.detail__button{
  display: flex;
  justify-content: space-between;
}
</style>