<template>
  <h1>Данные Зала</h1>
    <div class="office__detail">
      <div class="mb-3 detail__item">
        <label class="form-label">Название</label>
        <input type="text" v-model="dataGymRoom.name" class="form-control">
      </div>
      <div class="mb-3 detail__item">
        <label class="form-label">Выберите</label>
        <select v-model="officeSelectedUid" class="form-select">
          <option v-for="officeItem in selectOffice"
                  :value="officeItem.uid">
            {{ officeItem.name }}
          </option>
        </select>
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
</template>

<script>
import axios from "axios";
import ButtonDark from "@/components/UI/ButtonDark";
import ButtonRed from "@/components/UI/ButtonRed";
import FormSave from "@/components/FormSave";

export default {
  name: 'DetailGymRoom',
  components: {FormSave, ButtonDark, ButtonRed},
  props: ['uid'],
  data(){
    return{
      dataGymRoom: {},
      officeSelectedUid: {},
      selectOffice: []
    }
  },
  methods:{
    async getOfficeSelected(){
      try{
        const response = await axios.get(`http://127.0.0.1:8001/office`)
        this.selectOffice = response.data
      }catch (e){
        console.log(e)
      }
    },
    async getDetailGymRoom(){
      try {
        let response = await axios.get(`http://127.0.0.1:8001/gymroom/${this.$route.params.uid}`)
        this.officeSelectedUid = response.data.office
        this.dataGymRoom = response.data
      }catch (e){
        console.log(e)
      }
    },
    async updateDetailGymRoom(){
      try{
        delete this.dataGymRoom.uid
        delete this.dataGymRoom.office
        this.dataGymRoom.office_id = this.officeSelectedUid
        await axios.put(`http://127.0.0.1:8001/gymroom/${this.$route.params.uid}`, this.dataGymRoom)
        this.$router.push('/gymroom');
      }catch (e){
        console.log(e)
      }
    },
    async deleteDetailGymRoom(){
      try{
        await axios.delete(`http://127.0.0.1:8001/gymroom/${this.$route.params.uid}`)
        this.$router.push('/gymroom');
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.getDetailGymRoom();
    this.getOfficeSelected()
  }
}
</script>

<style scoped>

</style>