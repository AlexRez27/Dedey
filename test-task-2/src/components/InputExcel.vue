<template>
  <div
    class="container"
    id="file-drag-drop"
    :class="{ invalid: !valid }"
  >
    <form
      ref="fileform"
    >
      <label
        class="input"
        :for="id"
      ><span>{{ text }}</span></label>
      <input
        type="file"
        :id="id"
        class="upload"
        ref="file"
        @change="handleFileUpload()"
      >
    </form>
    <div
      v-if="valid"
      class="file-listing"
    />
  </div>
</template>

<script>
import mime from '.././dictionaries/mime'
import XLSX from 'xlsx'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'InputExcel',
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dragAndDropCapable: false,
      file: {},
      size: 10,
      extensions: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
      valid: true,
      text: '',
      rawData: [],
      resultArray: []
    }
  },
  computed: mapGetters(['getInfo']),
  methods: {
    ...mapActions(['getData']),
    ...mapMutations(['showAr']),
    fileValidations () {
      this.valid = false
      let validSize = false
      let validExt = false
      if (!this.extensions.includes(this.file.type)) {
        let fileType = Object.keys(mime).find(key => mime[key] === this.file.type)
        if (!fileType) {
          fileType = ''
        }
        this.text = `Недопустимый тип файла ${fileType}, выберите другой файл`
        validExt = false
      } else {
        this.text = this.placeholder
        validExt = true
      }
      if (validExt && this.file.size > this.size * 1000000) {
        this.text = `Допустимый размер файла ${this.size} мб, выберите другой файл`
        validSize = false
      } else if (validExt) {
        this.text = this.placeholder
        validSize = true
      }
      if (validSize && validExt) {
        this.valid = true
        this.text = `Файл - ${this.file.name}`
      }
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      this.fileValidations()
      if (this.file && this.valid) {
        this.readXlsFile()
      }
    },
    async readXlsFile () {
      const reader = new FileReader()
      const ar = []
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        /* DO SOMETHING WITH workbook HERE */
        for (let i = 0; i < workbook.SheetNames.length; i++) {
          const worksheet = workbook.Sheets[workbook.SheetNames[i]]
          const value = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
          if (value.length) {
            ar.push(value)
          }
        }
      }
      reader.readAsArrayBuffer(this.file)
      this.resultArray = ar
      this.$parent.loading = true
      await this.getData(ar)
      if (this.getInfo.status === 200) {
        this.$emit('sendArray', this.resultArray)
      }
    }
  },
  mounted () {
    this.text = this.placeholder
    const events = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
    events.forEach(function (evt) {
      this.$refs.fileform.addEventListener(evt, function (e) {
        e.preventDefault()
        e.stopPropagation()
      }, false)
    }.bind(this))
    this.$refs.fileform.addEventListener('drop', function (e) {
      this.file = e.dataTransfer.files[0]
      this.fileValidations()
      if (this.file && this.valid) {
        this.readXlsFile()
      }
    }.bind(this)) // Связка локального компонента с функцией которая обрабатывает Drop
  }
}
</script>

<style>
  .container{
    width: 80%;
    padding: 10px;
    background-color: #E0FFFF;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  form{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 1px dashed;
    margin-bottom: 10px;
  }
.upload {
   opacity: 0;
   position: absolute;
   z-index: -1;
  }
  .input{
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .invalid{
    background-color: #ADD6E5;
  }
</style>
