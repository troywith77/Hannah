const state = {
  activeNav: 'LiveNews',
  navs: [{
    label: '实时新闻',
    index: 'LiveNews',
    icon: 'el-icon-menu'
  }, {
    label: '主题库',
    index: 'Zhutiku',
    icon: 'el-icon-setting'
  }, {
    label: '打板神器',
    index: 'Ban',
    icon: 'el-icon-star-off'
  }]
}

const mutations = {
  CHANGE_ACTIVE_TAB(state, tabName) {
    state.activeNav = tabName
  },
  CHANGE_NAV(state, tabName) {
    console.log(tabName)
    state.activeNav = tabName
  }
}

const actions = {
  selectNav({ commit }, tabName) {
    commit('CHANGE_ACTIVE_TAB', tabName)
  },
  changeNav({ commit }, tabName) {
    commit('CHANGE_NAV', tabName)
  }
}

export default {
  state, 
  mutations,
  actions
}