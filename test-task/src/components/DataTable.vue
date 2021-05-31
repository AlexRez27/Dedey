<template>
  <div>
    <table
      border="1"
      v-for="(sheet,i) in columnContent"
      :key="i"
    >
      <caption>Лист {{ i+1 }}</caption>
      <tr>
        <th
          v-for="(header,j) in columnHeader[i]"
          :key="j"
        >
          {{ header }}
        </th>
      </tr>
      <tr
        v-for="(values,l) in sheet"
        :key="l"
      >
        <td
          v-for="(value,k) in values"
          :key="k"
        >
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'DataTable',
  props: {
    sheets: {
      type: Array,
      required: true
    }
  },
  computed: ({
    columnHeader () {
      const ar = []
      for (let i = 0; i < this.sheets.length; i++) {
        const sheet = [...this.sheets[i]]
        ar.push(sheet[0])
      }
      return ar
    },
    columnContent () {
      const ar = []
      for (let i = 0; i < this.sheets.length; i++) {
        const sheet = [...this.sheets[i]]
        sheet.splice(0, 1)
        ar.push(sheet)
      }
      return ar
    }
  })
}
</script>

<style lang="scss">
  table{
    width: 100%;
    margin-bottom: 30px;
  }
</style>
