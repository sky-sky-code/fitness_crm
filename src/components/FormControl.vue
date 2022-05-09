<template>
  <div class="form">
    <div class="form__item">
      <slot></slot>
    </div>
    <FormSave :dataSave="dataSave" :urlSave="urlSave"/>
  </div>
</template>

<script>
import FormSave from "@/components/FormSave";
export default {
  name: "FormControl",
  components: {FormSave},
  props: {
    dataSave: {
      type: String
    },
    urlSave: {
      type: String
    }
  }
}
</script>

<style scoped>
  .form__item{
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
</style>