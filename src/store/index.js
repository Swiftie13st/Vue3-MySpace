import { createStore } from "vuex";
import ModuleUser from "./users";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: ModuleUser,
  },
});
