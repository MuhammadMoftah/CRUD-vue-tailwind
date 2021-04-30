<template>
  <nav
    class="font-sans flex flex-col text-center pb-3 content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full shadow border-b"
  >
    <div class="mb-2 sm:mb-0 inner">
      <router-link
        to="/"
        class="text-2xl text-gray-700 no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
      >
        <i class="fas fa-home"></i> LogoText
      </router-link>
    </div>

    <div class="sm:mb-0 self-center">
      <router-link
        to="/home"
        class="text-md font-bold text-gray-700 no-underline text-black hover:text-gray-500 ml-2 px-1"
      >
        <i class="fas fa-users"></i>
        Users
      </router-link>
      <button
        class="text-md font-bold text-red-600 no-underline text-black hover:text-red-500 ml-2 px-1"
        @click="logout"
        v-if="$store.state.general.token"
      >
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // clear App Local Storage
      localStorage.clear();

      // clear token from VUEX
      this.$store.commit("general/setToken", null);

      this.$router.push("/");
    },
  },
  computed: {
    test() {
      console.log("test", localStorage.getItem("token"));
      return localStorage.getItem("token");
    },
  },
};
</script>

<style>
</style>