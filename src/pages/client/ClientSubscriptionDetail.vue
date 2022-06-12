<template>
  <div class="clientSubscription_detail">
    <h1>Данные Абонемента</h1>
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
    <div class="detail__button">
      <ButtonRed @click="deleteSubscriptionDetail">Удалить</ButtonRed>
    </div>
  </div>
</template>


<script>
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";
import axios from "axios";
import NavClient from "@/components/UI/navbar/NavClient";
export default {
  name: 'ClientSubscriptionDetail',
  components: {ButtonRed, ButtonDark, NavClient},
  props: ['uid'],
  data(){
    return{
      dataPurchasedSubscription: {
        date_activation: null,
        subscription_id: null,
        office_id: null,
      },
      price: 0,
      subscriptionSelect: [],
      officeSelect: [],
      client_uid: String
    }
  },
  methods: {
    async getPurchasedSubscription(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/client/purchased/subscription/${this.$route.params.uid}`)
        response.data['subscription_id'] = response.data['subscription']['uid']
        response.data['office_id'] = response.data['office']['uid']
        this.client_uid = response.data['client']['uid']
        this.price = response.data['subscription']['price']
        for(let key in response.data){
            if (!(key in this.dataPurchasedSubscription)){
              delete response.data[key]
            }
        }
        this.dataPurchasedSubscription = response.data
        console.log(this.dataPurchasedSubscription)
      }catch (e){
        console.log(e)
      }
    },
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
    },
    // async updateSubscriptionDetail(){
    //   try{
    //     await axios.put(`http://127.0.0.1:8001/client/purchased/subscription/${this.$route.params.uid}`,
    //         this.dataPurchasedSubscription)
    //     this.$router.push(`/client/${this.client_uid}/purchased/subscription`)
    //   }catch (e){
    //     console.log(e)
    //   }
    // },
    async deleteSubscriptionDetail(){
      try{
        await axios.delete(`http://127.0.0.01:8001/client/purchased/subscription/${this.$route.params.uid}`)
        this.$router.push(`/client/${this.client_uid}/purchased/subscription`)
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getPurchasedSubscription()
    this.getOffice()
    this.getSubscription()
  }
}
</script>

<style scoped>

</style>