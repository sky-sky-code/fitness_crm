<template>
  <div class="form">
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
    <FormSave :dataSave="dataOffice" :urlSave="urlSave"/>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import SuccessMessage from "@/components/FormSave";
import FormSave from "@/components/FormSave";
export default {
  name: 'AddOffice',
  components: {SuccessMessage, ButtonDark, FormSave},
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
      urlSave: 'http://127.0.0.1:8001/office'
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

</style>