<template>
  <div>
    <button
      disabled
      class="plus"
    >
      <i class="fas fa-plus" />
    </button>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/index.scss';
.plus{
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: #fed18c;
      color: #fff;
      border: none;
      margin: 21px 21px 0 26px;
      @include tablet{
        margin-top: 21px;
        width: 42px;
        height: 42px;
      }
    }
</style>
