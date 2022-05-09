<template>
  <div>
    <table class= "table table__orange">
      <thead class="thead-orange">
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

.table__orange{
  margin-top: 10px;
}

.thead-orange {
  background-color: #ef562f;
  color: white;
}

table{
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
}

</style>