<template>
  <div class="form__save">
    <ButtonDark @click="createOffice">Сохранить</ButtonDark>
    <div class="save__response"
         :class="{save__response_success: success, save__response_error: error}"
    >
      <span class="response__text">{{ this.responseText }}</span>
    </div>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
import axios from "axios";
export default {
  name: 'FormSave',
  components: {ButtonDark},
  props:{
    dataSave:{
      type: Object
    },
    urlSave: {
      type: String
    }
  },
  data(){
    return{
      success: false,
      error: false,
      responseText: ''
    }
  },
  methods: {
    async createOffice(){
      try {
        console.log(this.dataSave)
        await axios.post(this.urlSave, this.dataSave)
        this.error = false
        this.success = true
        this.responseText = "Успешно"
        setTimeout(this.hiddenResponse, 1500)
      }catch (e){
        this.success = false
        this.error = true
        this.responseText = "Ошибка"
        setTimeout(this.hiddenResponse, 1500)
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
  }
}
</script>

<style scoped>

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