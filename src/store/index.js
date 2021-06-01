import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  "state": () => ({
    repositories: [],
    currentRepository: {},
    modalOpen: false
  }),
  "mutations": {
    setRepositories(state, payload) {
      state.repositories = payload;
    },
    setCurrentRepository(state, payload) {
      state.currentRepository = payload;
    },
    setModalState(state, payload) {
      state.modalOpen = payload;
    },
    setRepositoryTags(state, payload) {
      state.currentRepository.tags = payload;
    }
  },
  "actions": {
    setRepositories({ commit }, payload) {
      commit('setRepositories', payload.value);
    },
    setCurrentRepository({ commit }, payload) {
      commit('setCurrentRepository', payload.value);
    },
    setRepositoryTags({commit}, payload) {
      commit('setRepositoryTags', payload.value);
    },
    setModalOpen({ commit }) {
      commit('setModalState', true);
    },
    setModalClose({ commit }) {
      commit('setModalState', false)
    },
  },
  "getters": {
    repositories(state) {
      return state.repositories;
    },
    currentRepository(state) {
      return state.currentRepository;
    },
    modalOpen(state) {
      return state.modalOpen;
    }
  }
})