<template>
  <div class="buttons">
    <!-- <button disabled class="buttons__plus">
      <i class="fas fa-plus" />
    </button> -->
    <button class="buttons__search">
      <span>Найти</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
  .buttons{
    display: flex;
    align-items: center;
    @include tablet{
      margin-left: 0;
    }
    &__plus{
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: #fed18c;
      color: #fff;
      border: none;
      margin-top: 15px;
      margin-right: 21px;
    }
    &__search{
      color: #fff;
      background-color: $secondColor;
      width: 175px;
      height: 63px;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      font-family: $secondFontFamily;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      &:hover, &:focus{
        background-color: darken($secondColor, 10%);
      }
      &:active{
        background-color: darken($secondColor, 20%);
      }
    }
  }
</style>
