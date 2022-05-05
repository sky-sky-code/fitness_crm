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
    <div class="form__save">
      <button type="button" @click="createOffice()" class="btn btn-dark">Сохранить</button>
      <div class="save__response"
           :class="{save__response_success: success, save__response_error: error}"
      >
        <span class="response__text">{{ this.responseText }}</span>
      </div>
    </div>
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
      },
      success: false,
      error: false,
      responseText: ''
    }
  },
  methods: {
    async createOffice(){
      try {
       await axios.post('http://127.0.0.1:8001/office', this.dataOffice)
        this.error = false
        this.success = true
        this.responseText = "Успешно"
        setTimeout(this.hiddenResponse, 2000)
      }catch (e){
        this.success = false
        this.error = true
        this.responseText = "Ошибка"
        setTimeout(this.hiddenResponse, 2000)
        console.log(e)
      }
    },
    hiddenResponse(){
      if (this.success === true){
        this.success = false
      }else{
        this.error = false
      }
    }
  },
  mounted() {
    this.hiddenResponse()
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

.form__save{
  display: flex;
  justify-content: space-between;
}

.save__response{
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;
  border-radius: 5px;
  height: 36px;
  width: 30%;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.5s;
}

.save__response_success{
  background-color: #40b73a;
  opacity: 1;
  transform: translateX(0px);
}

.save__response_error{
  background-color: #ef562f;
  opacity: 1;
  transform: translateX(0px);
}

.response__text{
  margin-right: 15px;
}

</style>