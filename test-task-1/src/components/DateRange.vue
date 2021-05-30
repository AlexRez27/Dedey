<template>
  <form
    class="date"
    @submit.prevent
  >
    <div class="date__wrapper">
      <v-date-picker
        v-model="range"
        mode="date"
        :masks="masks"
        is-range
      >
        <template v-slot="{ inputValue, inputEvents, isDragging }">
          <div class="date__cont ">
            <div class="date__range date__range--from">
              <label
                class="date__label"
                for="dateFrom"
              >Заезд</label>
              <div class="date__dateFrom">
                <img
                  class="date__icon"
                  src="../assets/calendar.png"
                  alt="calendar"
                >
                <input
                  class="date__input"
                  :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                  :value="inputValue.start"
                  id="dateFrom"
                >
              </div>
            </div>
            <div class="date__range date__range--to">
              <label
                class="date__label"
                for="dateTo"
              >Выезд</label>
              <div class="date__to">
                <input
                  class="date__input"
                  @change="getData(inputValue.en)"
                  :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                  :value="inputValue.end"

                  id="dateTo"
                >
                <i
                  v-on="inputEvents.end"
                  class="fas fa-chevron-down arrow"
                />
              </div>
            </div>
          </div>
        </template>
      </v-date-picker>
    </div>
  </form>
</template>

<script>

export default {
  data () {
    return {
      range: {
        start: new Date(2020, 1, 6),
        end: new Date(2020, 1, 22)
      },
      masks: {
        input: 'DD MMMM'
      }
    }
  },
  methods: {
    getData (v) {
      console.log(v)
    }
  }
}
</script>

<style>
@import '.././assets/scss/fonts.css';
</style>

<style lang="scss">
@import '.././assets/scss/var';
// @import '../assets/scss/index.scss';
  .date{
    margin-left: 26px;
    max-width: 378px;
    &__wrapper{
      height: 100%;
      &>span{
        height: 100%;
        display: block;
      }
    }
    &__cont{
      display: flex;
      height: 100%;
    }
    &__range{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
        &--from{
        max-width: 181px;
        position: relative;
          &:after{
            content: "";
            width: 3px;
            height: 3px;
            position: absolute;
            right: 0;
            top: 50%;
            background-color: #9a9a9a;
          }
        }
        &--to{
          margin-left: 31px;
        }
    }
    &__label{
      text-align: left;
      // font-family: $secondFontFamily;
      font-size: 12px;
      color: $fontColor;
    }
    &__icon{
      padding-right: 10px;
    }
    &__to{
      display: flex;
    }
    &__input{
      border: none;
      font-family: $mainFontFamily;
      font-size: $inputFontSize;
      max-width: 126px;
    }
    &__dateFrom{
      display: flex;
    }
    .arrow{
      cursor: pointer;
      border-right: 2px solid #e9e9e9;
      padding-right: 26px;
    }
  }
</style>
