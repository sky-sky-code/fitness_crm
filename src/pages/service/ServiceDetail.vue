<template>
  <div>
    <div class="mb-3">
      <label class="form-label">Название</label>
      <input class="form-control" v-model="dataService.name" type="text"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Цена</label>
      <input class="form-control" v-model="dataService.price" type="number"/>
    </div>
    <div class="mb-3">
      <div class="form-floating">
      <textarea class="form-control" v-model="dataService.description"
                placeholder="Leave a comment here" style="height: 100px"></textarea>
        <label>Описание</label>
      </div>
    </div>
    <div class="detail_button d-flex justify-content-sm-between">
      <ButtonDark @click="updateService">Сохранить</ButtonDark>
      <ButtonRed @click="deleteService">Удалить</ButtonRed>
    </div>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";
import axios from "axios";
export default {
  name: "ServiceDetail",
  components: {ButtonDark, ButtonRed},
  props: ['uid'],
  data(){
    return{
      dataService: {}
    }
  },
  methods:{
    async getService(){
      try{
        let response = await axios.get(`http://127.0.0.1:8001/service/${this.uid}`)
        this.dataService = response.data
      }catch (e){
        console.log(e)
      }
    },
    async updateService(){
      try{
        delete this.dataService['uid']
        delete this.dataService['purchasedservices']
        await axios.put(`http://127.0.0.1:8001/service/${this.uid}`, this.dataService)
      }catch (e){
        console.log(e)
      }
    },
    async deleteService(){
      try{
        await axios.delete(`http://127.0.0.1:8001/service/${this.uid}`)
        this.$router.push('/service');
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getService()
  }
}
</script>

<style scoped>

</style>