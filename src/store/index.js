import Vue from 'vue'
import Vuex from 'vuex'
import Project from './modules/project'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Project
  },
  state: {
    projects: [
      {
        name: 'Project 1',
        option1: true,
        option2: false
      },
      {
        name: 'Project 2',
        option1: false,
        option2: false
      },
      {
        name: 'Project 3',
        option1: false,
        option2: true
      }
    ]
  }
})
