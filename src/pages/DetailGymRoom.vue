<template>
  <div>
    <div class="office__detail">
      <div class="mb-3 detail__item">
        <label class="form-label">Название</label>
        <input type="text" v-model="dataGymRoom.name" class="form-control">
      </div>
      <div class="mb-3 detail__item">
        <label class="form-label">Фелилал</label>
        <input type="text" v-model="dataGymRoom.office" class="form-control">
      </div>
      <div class="mb-3 detail__item">
        <label class="form-label">Описание</label>
        <input type="text" v-model="dataGymRoom.description" class="form-control">
      </div>
      <div class="detail__button">
        <ButtonDark @click="updateDetailGymRoom">Сохранить</ButtonDark>
        <ButtonRed @click="deleteDetailGymRoom">Удалить</ButtonRed>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";

export default {
  name: 'DetailGymRoom',
  props: ['uid'],
  components: {ButtonDark, ButtonRed},
  data(){
    return{
      dataGymRoom: {}
    }
  },
  methods:{
    async getDetailGymRoom(){
      try {
        let response = await axios.get(`http://127.0.0.1:8001/gymroom/${this.$route.params.uid}`)
        console.log(response.data)
        response.data['office'] = response.data['office']['name']
        this.dataGymRoom = response.data
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getDetailGymRoom()
  }
}
</script>

<style scoped>

</style>