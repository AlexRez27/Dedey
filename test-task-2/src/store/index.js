import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async getData ({ commit }, { resultAr }) {
      await axios.post('https://httpbin.org/post', { resultArray: resultAr }, {
        headers: { Authorization: 'test-task' }
      })
        .then(
          (response) => {
            commit('showData', response)
          },
          (error) => { console.log(error) }
        )
    }
  },
  mutations: {
    showData (state, data) {
      state.data = data
    }
  },
  state: {
    data: []
  },
  modules: {
  },
  getters: {
    getInfo (state) {
      return state.data
    }
  }
})
