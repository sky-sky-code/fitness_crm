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
        <tr v-for="(dataItem, dataIndex) of dataTable" :key="dataIndex">
          <th scope="row">
            <router-link :to="{name: nameLink, params: {uid: dataItem.uid}}">
              {{ dataIndex + 1 }}
            </router-link>
          </th>
          <td v-for="(outputName, outputItemIndex) of outputData" :key="outputItemIndex">
            <router-link v-if="outputItemIndex==0" :to="{name: nameLink, params: {uid: dataItem.uid}}">
              {{ dataItem[outputName] }}
            </router-link>
            <span v-else>{{ dataItem[outputName] }}</span>
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
    },
    nameLink: {
      type: String
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