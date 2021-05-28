<template>
  <div id="app">
    <InputExcel
      :id="id"
      :placeholder="placeholders"
      @sendArray="getArray"
    />
    <DataTable
      :sheets="result"
      v-if="status"
    />
  </div>
</template>

<script>
import InputExcel from './components/InputExcel'
import DataTable from './components/DataTable'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      id: 'file',
      placeholders: 'Перетащите файл сюди или нажмите... чтобы выбрать',
      result: [],
      status: false
    }
  },
  components: { InputExcel, DataTable },
  computed: mapGetters(['getInfo']),
  methods: {
    getArray (ar) {
      this.result = ar
      if (this.getInfo.status === 200) {
        this.status = true
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
