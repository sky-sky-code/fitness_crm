<template>
  <div class="d-flex mt-3 justify-content-between">
    <div v-for="(value, index) of paramName" :key="index">
      <input class="form-control" @input="updateData" :placeholder="filterName[index]"  v-model="dataSearch[value]"/>
    </div>
  </div>
</template>

<script>
import ButtonDark from "@/components/UI/ButtonDark";
export default {
  name: 'FilterControl',
  components: {ButtonDark},
  props: {
    filterName:{
      type: Array
    },
    paramName:{
      type: Array
    }
  },
  data(){
    return{
      dataSearch: {}
    }
  },
  methods: {
    updateData(e){
      this.$emit('searchData', this.dataSearch)
    }
  }
}
</script>

<style scoped>

</style>