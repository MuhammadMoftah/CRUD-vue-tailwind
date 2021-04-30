import Vue from "vue";
import Vuex from "vuex";
import general from "./general.js";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      general
    },
  });

  return Store;
}