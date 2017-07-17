const state = {
  activeTab: 'LiveNews',
  tabs: [{
    title: 'Tab 1',
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
  ADD_TAB(state, tabName) {
    if(!~state.tabs.map(tab => tab.name).indexOf(tabName)) {
      state.tabs.push({
        title: tabName,
        name: tabName,
        content: null
      })
    }
    state.activeTab = tabName
  }
};

const actions = {
  removeTab({ commit }, targetName) {
    commit('REMOVE_TAB', targetName)
  },
  addTab({ commit }, tabName) {
    commit('ADD_TAB', tabName)
  }
};

export default {
  state,
  mutations,
  actions,
};
