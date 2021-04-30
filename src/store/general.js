export const state = () => ({
  token: '',
  modal: '',
  users: [],
  activeUser: ''
});
const getters = {

};
const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
  setUsers(state, payload) {
    state.users = payload
  },
  setModal(state, payload) {
    state.modal = payload
  },
  setActiveUser(state, payload) {
    state.activeUser = payload
  },
  editUser(state, payload) {
    const users = [...state.users]
    const index = users.findIndex(item => item.id == payload.id);
    users.splice(index, 1, payload)
    state.users = users
  },
  deleteUser(state, payload) {
    state.users = state.users.filter(item => item.id != payload.id)
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
