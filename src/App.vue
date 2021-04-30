<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  beforeCreate() {
    //Sync VUEX with LocalStorage
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.commit("general/setToken", token);
    }
  },
  components: {
    Navbar,
  },
};
</script>
<style>
input:focus,
textarea:focus,
select:focus,
button:focus {
  outline: none;
}

/* anmation fade  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
