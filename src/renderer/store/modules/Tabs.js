const state = {
  activeTab: 'LiveNews',
  tabs: [{
    title: '实时新闻',
    name: 'LiveNews',
    content: 'LiveNews'
  }, {
    title: 'Tab 2',
    name: 'Test',
    content: 'Test'
  }]
};

const mutations = {
  REMOVE_TAB(state, targetName) {
    let tabs = state.tabs;
    let activeName = state.activeTab;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    
    state.activeTab = activeName;
    state.tabs = tabs.filter(tab => tab.name !== targetName);
  },
  ADD_TAB(state, { key, title }) {
    if(!~state.tabs.map(tab => tab.name).indexOf(key)) {
      state.tabs.push({
        title: title || key,
        name: key,
        content: key
      })
    }
    state.activeTab = key
  }
};

const actions = {
  removeTab({ commit }, targetName) {
    commit('REMOVE_TAB', targetName)
  },
  addTab({ commit }, payload) {
    commit('ADD_TAB', payload)
  }
};

export default {
  state,
  mutations,
  actions,
};
