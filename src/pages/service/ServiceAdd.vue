<template>
  <h1>Добавление Услуги</h1>
  <FormControl :dataSave="dataService" :urlSave="urlSave">
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
  </FormControl>
</template>

<script>
import FormControl from "@/components/FormControl";
export default {
  name: "ServiceAdd",
  components: {FormControl},
  data(){
    return{
      dataService: {
        name: null,
        price: null,
        description: null
      },
      urlSave: 'http://127.0.0.1:8001/service'
    }
  }
}
</script>

<style scoped>

</style>