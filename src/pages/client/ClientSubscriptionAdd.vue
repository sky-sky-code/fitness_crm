<template>
  <h1>Оформление Абонемента</h1>
  <FormControl :dataSave="dataPurchasedSubscription" :urlSave="urlSave">
    <div class="mb-3">
      <label class="form-label">Дата Активации</label>
      <input type="date" v-model="dataPurchasedSubscription.date_activation" class="form-control"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Выбирите Абонимент</label>
      <select v-model="dataPurchasedSubscription.subscription_id" @change="changeOptionSubscription" class="form-select">
        <option v-for="subscription in subscriptionSelect" :key="subscription.uid" :value="subscription.uid">
          {{ subscription.name }} ( {{ subscription.gym_lesson.name }} {{ subscription.gym_lesson.type }})
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Выбирите Феллиал</label>
      <select v-model="dataPurchasedSubscription.office_id" class="form-select">
        <option v-for="office in officeSelect" :key="office.uid" :value="office.uid">
          {{ office.name }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Цена, рублей</label>
      <input class="form-control" :value="price" type="number"/>
    </div>
  </FormControl>
</template>

<script>
import FormControl from "@/components/FormControl";
import axios from "axios";
export default {
  name: 'ClientSubscriptionAdd',
  components: {FormControl},
  props: ['uid'],
  data(){
    return{
      dataPurchasedSubscription: {
        date_activation: null,
        subscription_id: null,
        office_id: null,
      },
      urlSave: `http://127.0.0.1:8001/client/${this.uid}/purchased/subscription`,
      subscriptionSelect: [],
      officeSelect: [],
      price: 0,
    }
  },
  methods: {
    async getSubscription(){
      try{
        let response = await axios.get('http://127.0.0.01:8001/subscription')
        this.subscriptionSelect = response.data
      }catch (e){
        console.log(e)
      }
    },
    async getOffice(){
      try{
        let response = await axios.get(`http://127.0.0.01:8001/office`)
        this.officeSelect = response.data
        console.log(this.officeSelect)
      }catch (e){
        console.log(e)
      }
    },
    async changeOptionSubscription(e){
      try{
        let response = await axios.get(`http://127.0.0.01:8001/subscription/${e.target.value}`)
        this.price = response.data.price
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getSubscription()
    this.getOffice()
  }
}
</script>

<style scoped>

</style>