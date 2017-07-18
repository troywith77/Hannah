const state = {
  activeTab: 'LiveNews',
  tabs: [{
    label: '实时新闻',
    key: 'LiveNews',
    component: 'LiveNews'
  }, {
    label: 'Tab 2',
    key: 'Test',
    component: 'Test'
  }]
};

const mutations = {
  REMOVE_TAB(state, key) {
    let tabs = state.tabs;
    let activeTab = state.activeTab;
    if (activeTab === key) {
      tabs.forEach((tab, index) => {
        if (tab.key === key) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeTab = nextTab.key;
          }
        }
      });
    }
    
    state.activeTab = activeTab;
    state.tabs = tabs.filter(tab => tab.key !== key);
  },
  ADD_TAB(state, { component, key, label }) {
    if(!~state.tabs.map(tab => tab.key).indexOf(key)) {
      state.tabs.push({
        label: label,
        key: key,
        component: component
      })
    }
    state.activeTab = key
  },
  CLICK_TAB(state, key) {
    state.activeTab = key
  }
};

const actions = {
  removeTab({ commit }, key) {
    commit('REMOVE_TAB', key)
  },
  addTab({ commit }, payload) {
    commit('ADD_TAB', payload)
  },
  clickTab({ commit }, key) {
    commit('CLICK_TAB', key)
  }
};

export default {
  state,
  mutations,
  actions,
};
