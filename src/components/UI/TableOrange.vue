<template>
  <div>
    <div class="office__table">
      <table class="table">
        <thead class="table-orange">
        <tr>
          <th scope="col">#</th>
          <th v-for="(name, index) of nameData" :key="index">{{ name }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(officeItem, officeItemIndex) of dataTable" :key="officeItemIndex">
          <th scope="row">
            <router-link :to="{name: 'officeDetail', params: {officeUid: officeItem.uid}}">
              {{ officeItemIndex + 1 }}
            </router-link>
          </th>
          <td v-for="(outputName, outputItemIndex) of outputData" :key="outputItemIndex">
            <router-link v-if="outputItemIndex==0" :to="{name: 'officeDetail', params: {officeUid: officeItem.uid}}">
              {{ officeItem[outputName] }}
            </router-link>
            <span v-else>{{ officeItem[outputName] }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    dataTable: {
      type: Array
    },
    outputData: {
      type: Array
    },
    nameData: {
      type: Array
    }
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