<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <Place />
        <DateRange />
      </div>
      <div class="search" />
    </div>
  </div>
</template>

<script>
import Place from './components/Place'
import DateRange from './components/DateRange'
export default {
  name: 'App',
  components: {
    Place,
    DateRange
  }
}
</script>

<style lang="scss" scoped>
// @import './assets/scss/index.scss';
#app {
  height: 90px;
}
.container{
  max-width: 1170px;
  padding: 26px 0 26px 50px;
  display: flex;
}
.content{
  display: flex;
}
@media (max-width: 768px) {
  .content{
    flex-direction: column;
  }
}
</style>
