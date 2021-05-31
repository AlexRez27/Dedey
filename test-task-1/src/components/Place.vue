<template>
  <div class="place">
    <label
      for="place"
      class="place__label"
    >Место или название отеля</label>
    <div class="place__cont">
      <div class="place__img">
        <img
          class="place__marker"
          src="../assets/marker.png"
          alt="marker"
        >
      </div>
      <input
        placeholder="Введите здесь место"
        id="place"
        type="text"
        class="place__input"
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/index.scss';
  .place{
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__label{
      font-family: 'myriad Pro';
      font-size: 12px;
      color: $fontColor;
      text-align: left;
      font-weight: bold;
    }
    &__cont{
      padding-top: 10px;
      border-right: 2px solid $borderColor;
      display: flex;
      width: 100%;
      @include tablet{
        border-right: none;
      }
    }
    &__img{
      padding-top: 1px;
    }
    &__marker{
      // vertical-align: middle;
      padding-right: 9px;
    }
    &__input{
      border: none;
      font-family: $mainFontFamily;
      font-size: $inputFontSize;
      color: #6b6b6b;
      width: 100%;
      outline: none;
    }
  }
</style>
