<template>
  <div id="app">
    <InputExcel
      :id="id"
      :placeholder="placeholders"
      @sendArray="getArray"
    />
    <Loader v-if="loading" />
    <DataTable
      :sheets="result"
      v-else-if="status && !loading"
    />
  </div>
</template>

<script>
import InputExcel from './components/InputExcel'
import DataTable from './components/DataTable'
import Loader from './components/Loader'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      id: 'file',
      placeholders: 'Перетащите файл сюда или нажмите чтобы выбрать',
      result: [],
      status: false,
      loading: false
    }
  },
  components: { InputExcel, DataTable, Loader },
  computed: mapGetters(['getInfo']),
  methods: {
    getArray (ar) {
      this.result = ar
      if (this.getInfo.status === 200) {
        this.status = true
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
