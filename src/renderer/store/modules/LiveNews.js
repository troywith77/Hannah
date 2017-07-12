import { getLiveMsgs } from '../../services'

const state = {
  msgs: []
};

const mutations = {
  APPEND_LIVENEWS(state, newMsgs) {
    state.msgs = [...state.msgs, ...newMsgs]
  }
};

const actions = {
  fetchLiveNews({ commit }) {
    getLiveMsgs()
      .then(res => {
        commit('APPEND_LIVENEWS', res.data.NewMsgs);
      })
  },
};

export default {
  state,
  mutations,
  actions,
};
