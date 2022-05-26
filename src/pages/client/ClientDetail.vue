<template>
  <div class="client_detail">
    <navbar class="nav mb-3">
      <div class="client__nav">
        <div class="nav__item" v-for="item in navDataClient" :key="item">
          <router-link :to="item.route">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </navbar>
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
export default {
  name: "ClientDetail",
  props: ['uid'],
  components: {ButtonRed, ButtonDark},
  data(){
    return{
      dataClient: {},
      subscriptionsClient: {},
      navDataClient: [
          {name: "Данные", route: {name: 'ClientDetail'}},
          {
            name: "Абонимент",
            route: {
              name: "ClientSubscription",
              params: {subscriptionsClient: this.subscriptionsClient}
            }
          },
          {name: "Услуги", route: {name: ""}}
      ]
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

.nav{
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.client__nav{
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.nav__item{
  padding: 10px;
  transition: all 0.2s;
  border-radius: 5px;
}

.nav__item:hover{
  background-color: #ef562f;
}

.nav__item:hover a{
  color: white !important;
}

</style>