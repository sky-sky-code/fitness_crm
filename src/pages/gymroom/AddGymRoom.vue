<template>
  <FormControl :dataSave="dataGymRoom" :urlSave="urlSave">
    <div class="mb-3">
      <label  class="form-label">Название</label>
      <input v-model="dataGymRoom.name"  class="form-control" >
    </div>
    <div class="mb-3">
      <label class="form-label">Выберите из списка</label>
      <select v-model="dataGymRoom.office_id" class="form-select" >
        <option v-for="dataOffice in selectOffice" :key="dataOffice.uid" :value="dataOffice.uid" >
          {{ dataOffice.name }}
        </option>
      </select>
    </div>
    <br>
    <div class="mb-3">
      <label  class="form-label">Описание</label>
      <textarea v-model="dataGymRoom.description" class="form-control" rows="5"></textarea>
    </div>
  </FormControl>
</template>


<script>
import FormControl from "@/components/FormControl";
import axios from "axios";
export default {
  name: "AddGymRoom",
  components: {FormControl},
  data(){
    return{
      dataGymRoom:{
        name: null,
        office_id: null,
        description: null
      },
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