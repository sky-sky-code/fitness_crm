<template>
  <div class="form">
    <div class="mb-3">
      <label  class="form-label">Название</label>
      <input v-model="dataGymRoom.name"  class="form-control" >
    </div>
    <label class="form-label">Выберите из списка</label>
    <select v-model="dataGymRoom.office_id" class="form-select" >
      <option v-for="dataOffice in selectOffice" :key="dataOffice.uid" :value="dataOffice.uid" >
        {{ dataOffice.name }}
      </option>
    </select>
    <br>
    <div class="mb-3">
      <label  class="form-label">Описание</label>
      <textarea v-model="dataGymRoom.description" class="form-control" rows="5"></textarea>
    </div>
    <FormSave :dataSave="dataGymRoom" :urlSave="urlSave"/>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import SuccessMessage from "@/components/FormSave";
import FormSave from "@/components/FormSave";
import axios from "axios";
export default {
  name: "AddGymRoom",
  components: {ButtonDark, SuccessMessage, FormSave},
  data(){
    return{
      dataGymRoom:{
        name: null,
        office_id: null,
        description: null
      },
      selectValue: 'Выбирите Фелилал',
      selectOffice: [],
      urlSave: 'http://127.0.0.1:8001/gymroom'
    }
  },
  methods: {
    async getSelectOffice(){
      try {
        const response = await axios.get('http://127.0.0.1:8001/office')
        this.selectOffice = response.data
      }catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getSelectOffice()
  }
}
</script>

<style scoped>

</style>