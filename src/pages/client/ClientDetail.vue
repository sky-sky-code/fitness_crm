<template>
  <div class="client_detail">
    <h1>Данные Клиента</h1>
    <NavClient/>
    <div class="form">
      <div class="formControlImage">
        <img src="https://www.clipartmax.com/png/full/427-4278400_phoenix-flag-clipart-beach-black-phoenix-logo-png.png" alt="">
      </div>
      <div class="formControl">
        <div class="formControl__item mb-3">
          <div>
            <label  class="form-label">Фамилия</label>
            <input v-model="dataClient.surname" type="text" class="form-control" >
          </div>
          <div>
            <label  class="form-label">Имя</label>
            <input v-model="dataClient.name" type="text" class="form-control" >
          </div>
          <div>
            <label  class="form-label">Отчество</label>
            <input v-model="dataClient.pat_name" type="text" class="form-control" >
          </div>
        </div>
        <div class="formControl__item mb-3">
          <div>
            <label class="form-label">Дата Рождения</label>
            <input v-model="dataClient.date_birth" type="date" class="form-control" />
          </div>
          <div>
            <label class="form-label">Выбирите Пол</label>
            <select v-model="dataClient.gender" class="form-select">
              <option selected>М</option>
              <option>Ж</option>
            </select>
          </div>
          <div>
            <label class="form-label">Серия Паспорта</label>
            <input v-model="dataClient.series_passport" type="text" class="form-control">
          </div>
          <div>
            <label class="form-label">Серия Паспорта</label>
            <input v-model="dataClient.number_passport" type="text" class="form-control">
          </div>
        </div>
        <div class="formControl__item mb-3">
          <div>
            <label class="form-label">Телефон</label>
            <input v-model="dataClient.phone" type="phone" class="form-control">
          </div>
          <div>
            <label class="form-label">Email</label>
            <input v-model="dataClient.email" type="email" class="form-control" />
          </div>
          <div>
            <label class="form-label">Тренер</label>
            <select class="form-select">
              <option>Выбор Тренера</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="detail__button">
      <ButtonDark @click="updateDetailClient">Сохранить</ButtonDark>
      <ButtonRed @click="deleteDetailClient">Удалить</ButtonRed>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonRed from "@/components/UI/ButtonRed";
import ButtonDark from "@/components/UI/ButtonDark";
import NavClient from "@/components/UI/navbar/NavClient";
export default {
  name: "ClientDetail",
  props: ['uid'],
  components: {ButtonRed, ButtonDark, NavClient},
  data(){
    return{
      dataClient: {},
      subscriptionsClient: {},
    }
  },
  methods:{
    async getClient(){
      try{
        const response = await axios.get(`http://127.0.0.1:8001/client/${this.$route.params.uid}`)
        this.dataClient = response.data
        this.subscriptionsClient = this.dataClient['purchasedsubscriptions']
        delete this.dataClient['purchasedsubscriptions']
        delete this.dataClient['trainer']
        delete this.dataClient['uid']
        console.log(this.dataClient)
        console.log(this.subscriptionsClient)
      }catch (e){
        console.log(e)
      }
    },
    async updateDetailClient(){
      try{
        this.dataClient['trainer_id'] = null
        console.log(this.dataClient)
        await axios.put(`http://127.0.0.1:8001/client/${this.$route.params.uid}`, this.dataClient)
        this.$router.push('/client')
      }catch (e){
        console.log(e)
      }
    },
    async deleteDetailClient(){
      try{
        await axios.delete(`http://127.0.0.1:8001/client/${this.$route.params.uid}`, this.dataClient)
        this.$router.push('/client')
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getClient()
  }
}
</script>

<style scoped>

.form{
  display: flex;
}

.formControlImage{
  padding: 10px;
  border: #ef562f solid 1px;
  opacity: 0.5;
}

.formControl{
  width: 100%;
}

.formControlImage img {
  width: 200px;
}


</style>