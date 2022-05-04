<template>
  <div class="office__form">
    <div class="form__name">
      <label class="form-label">Название</label>
      <input type="text" v-model="dataOffice.name" class="form-control"  placeholder="Введите навазние фелиала">
    </div>
    <div class="form__otherField">
        <div class="otherFiled__item">
          <label class="form-label">Адрес</label>
          <input type="text" v-model="dataOffice.address" class="form-control">
        </div>
        <div class="otherFiled__item">
          <label class="form-label">Сайт</label>
          <input type="text" v-model="dataOffice.site" class="form-control" >
        </div>
        <div class="otherFiled__item">
          <label class="form-label">Контакты</label>
          <input type="text" v-model="dataOffice.phone" class="form-control">
        </div>
    </div>
    <div class="form__otherField">
      <div class="otherFiled__item">
        <label class="form-label">Страница VK</label>
        <input type="text" v-model="dataOffice.vk_url" class="form-control">
      </div>
      <div class="otherFiled__item">
        <label class="form-label">Страница Facebook</label>
        <input type="text" v-model="dataOffice.facebook_url" class="form-control">
      </div>
      <div class="otherFiled__item">
        <label class="form-label">Страница Instagram</label>
        <input type="text" v-model="dataOffice.instagram_url" class="form-control">
      </div>
    </div>
    <div class="form__description">
      <div class="form-floating">
        <textarea class="form-control" v-model="dataOffice.description"
                  placeholder="Leave a comment here" style="height: 100px"></textarea>
        <label>Примечание</label>
      </div>
    </div>
    <button type="button" @click="createOffice()" class="btn btn-dark">Сохранить</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddOffice',
  data(){
    return{
      dataOffice: {
        name: null,
        address: null,
        phone: null,
        site: null,
        vk_url: null,
        facebook_url: null,
        instagram_url: null,
        description: null
      }
    }
  },
  methods: {
    async createOffice(){
      try {
       await axios.post('http://127.0.0.1:8001/office', this.dataOffice)
      }catch (e){
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>


.form__otherField{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.otherFiled__item{
  width: 30%;
}

.form__description{
  margin: 20px 0;
}

.form-control:focus{
  box-shadow: 0 2px 3px rgb(230, 28, 35);
  border: rgb(230, 28, 35);
}

.btn-dark:hover, .btn-dark:focus, .btn-dark:active {
    box-shadow: 0 2px 3px rgb(230, 28, 35);
    border: rgb(230, 28, 35);
}

</style>