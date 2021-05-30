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
@import '.././assets/scss/fonts';
@import '.././assets/scss/var';
// @import '../assets/scss/index.scss';
  .place{
    // padding-right: 26px;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    &__label{
      font-family: 'myriad Pro';
      font-size: 12px;
      color: $fontColor;
      text-align: left;
    }
    &__cont{
      padding-top: 10px;
      border-right: 2px solid #e9e9e9;
      display: flex;
      width: 100%;
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
