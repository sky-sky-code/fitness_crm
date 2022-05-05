<template>
  <div class="office">
    <div class="office__add">
      <router-link to="/office/add">
        <button type="button" class="btn btn-dark">Добавить Фелиал</button>
      </router-link>
    </div>
    <div class="office__table">
      <table class="table">
        <thead class="table-orange">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Адрес</th>
          <th scope="col">Контакты</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(officeItem, index) of dataOffice" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <router-link :to="{name: 'officeDetail', params: {officeUid: officeItem.uid}}">{{ officeItem.name }}</router-link>
          </td>
          <td>{{ officeItem.address }}</td>
          <td>{{ officeItem.phone }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Office",
  data(){
    return{
      dataOffice:[]
    }
  },
  methods: {
    async getOffice(){
      try{
        const response = await axios.get('http://localhost:8001/office')
        this.dataOffice = response.data
        console.log(this.dataOffice)
      }catch (e){
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.getOffice()
  }
}
</script>

<style scoped>
  .office__table{
    margin-top: 10px;
  }

  .table-orange{
    background-color: #ef562f;
    color: white;
  }
</style>