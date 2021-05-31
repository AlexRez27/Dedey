<template>
  <div id="app">
    <div class="container">
      <Place />
      <DateRange />
      <div class="counters">
        <Counter
          v-for="(label,i) in labels"
          :key="i"
          :label="label"
        />
        <ButtonPlus />
      </div>
      <Search />
    </div>
  </div>
</template>

<script>
import Place from './components/Place'
import DateRange from './components/DateRange'
import Counter from './components/Counter'
import Search from './components/Search'
import ButtonPlus from './components/ButtonPlus'

export default {
  name: 'App',
  components: {
    Place,
    DateRange,
    Counter,
    ButtonPlus,
    Search
  },
  data () {
    return {
      labels: ['Номера', 'Взрослые', 'Дети']
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/index.scss';
@font-face {
  font-family: "ProximaNova";
  src: url(./assets/fonts/ProximaNova.woff2) format("woff2");
}
@font-face {
  font-family: "AvenirNextCyr-Medium";
  src: url(./assets/fonts/AvenirNextCyr-Medium.woff) format("woff");
}
#app {
  height: 90px;
}
.container{
  max-width: 1170px;
  padding-top: 26px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  margin: 0 auto;
  @include tablet {
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    text-align: center;
    padding-left: 0;
  }
  @include mobile {
    grid-template-columns: 1fr ;
    grid-template-rows: repeat(4, 1fr);
  }

}
.content{
  display: flex;
  @include tablet {
    flex-direction: column;
  }
}
.counters{
  display: flex;
  @include tablet{
    margin-bottom: 20px;
  }
}
</style>
