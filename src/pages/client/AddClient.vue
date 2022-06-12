<template>
  <h1>Добавление Клиента</h1>
  <FormControl :dataSave="dataClient" :urlSave="urlSave">
    <div class="formControl__item mb-3">
      <div>
        <label  class="form-label">Фамилия</label>
        <input v-model="dataClient.surname" type="text" class="form-control" >
      </div>
      <div>
        <label  class="form-label">Имя</label>
        <input v-model="dataClient.name" type="text" class="form-control" >
      </div>
      <div>
        <label  class="form-label">Отчество</label>
        <input v-model="dataClient.pat_name" type="text" class="form-control" >
      </div>
    </div>
    <div class="formControl__item mb-3">
      <div>
        <label class="form-label">Дата Рождения</label>
        <input v-model="dataClient.date_birth" type="date" class="form-control" />
      </div>
      <div>
        <label class="form-label">Выбирите Пол</label>
        <select v-model="dataClient.gender" class="form-select">
          <option selected>М</option>
          <option>Ж</option>
        </select>
      </div>
      <div>
        <label class="form-label">Серия Паспорта</label>
        <input v-model="dataClient.series_passport" type="text" class="form-control">
      </div>
      <div>
        <label class="form-label">Серия Паспорта</label>
        <input v-model="dataClient.number_passport" type="text" class="form-control">
      </div>
    </div>
    <div class="formControl__item mb-3">
      <div>
        <label class="form-label">Телефон</label>
        <input v-model="dataClient.phone" type="phone" class="form-control">
      </div>
      <div>
        <label class="form-label">Email</label>
        <input v-model="dataClient.email" type="email" class="form-control" />
      </div>
      <div>
        <label class="form-label">Тренер</label>
        <select class="form-select">
            <option>Выбор Тренера</option>
        </select>
      </div>
    </div>
  </FormControl>
</template>

<script>
import FormControl from "@/components/FormControl";

export default {
  name: "AddClient",
  components: {FormControl},
  data(){
    return{
      dataClient: {
        name: null,
        surname: null,
        pat_name: null,
        date_birth: null,
        gender: null,
        series_passport: null,
        number_passport: null,
        phone: null,
        email: null,
        is_staff: false,
        trainer_id: null
      },
      urlSave: 'http://127.0.0.1:8001/client'
    }
  }
}
</script>

<style>
  .formControl__item{
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .formControl__item div{
    margin-left: 15px;
    width: 33.3333%;
  }
</style>