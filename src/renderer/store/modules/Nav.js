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
  CHANGE_NAV(state, key) {
    state.activeNav = key
  }
}

const actions = {
  clickTab({ commit }, key) {
    commit('CHANGE_NAV', key)
  },
  addTab({ commit }, payload) {
    commit('CHANGE_NAV', payload.key)
  }
}

export default {
  state, 
  mutations,
  actions
}