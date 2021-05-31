<template>
  <div class="counter">
    <label
      class="counter__label"
      for="counter"
    >{{ label }}</label>
    <div class="counter__content">
      <input
        id="counter"
        class="counter__number"
        type="number"
        v-model="number"
      >
      <div class="counter__buttons">
        <div
          @click="increment"
          class="counter__button counter__button--increment "
        />
        <div
          @click="decrement"
          class="counter__button counter__button--decrement "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  name: 'Counter',
  data () {
    return {
      number: 0
    }
  },
  methods: {
    increment () {
      this.number += 1
    },
    decrement () {
      if (this.number) {
        this.number -= 1
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
  .counter{
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    margin-left: 27px;
    @include tablet{
      margin-left: 0;
      flex-direction: column;
      display: inline-block;
    }
    &+&{
      margin-left: 32px;
    }
    &__content{
      display: flex;
    }
    &__label{
      font-family: $secondFontFamily;
      color: $fontColor;
      font-size: 12px;
      font-weight: bold;
    }
    &__number{
      width: 28px;
      height: 28px;
      position: relative;
      text-align: center;
      outline: none;
      font-size: 16px;
      color: $mainColor;
      @include tablet{
        width: 42px;
        height: 42px;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button{
        appearance: none;
      }
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
     }
     &__button{
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid $mainColor;
        margin-left: 6px;
        cursor: pointer;
        @include tablet{
          display: none;
        }
        &--decrement{
          border-top: 6px solid $mainColor;
          border-bottom:none
        }
        &:hover,&:active{
          border-bottom-color: $secondColor;
          border-top-color: $secondColor;
        }
     }
  }
</style>
