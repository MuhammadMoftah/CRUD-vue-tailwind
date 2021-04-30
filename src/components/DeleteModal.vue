<template>
  <section
    class="flex justify-center w-screen h-screen items-center bg-black antialiased fixed top-0 bg-opacity-50"
  >
    <div
      class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
    >
      <div
        class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
      >
        <p class="font-semibold text-gray-800">Delete User</p>
        <button class="font-bold text-gray-700" @click="closeModal()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col flex-wrap px-6 py-5 bg-white">
        <div class="flex sm:flex-row flex-wrap items-center mb-5 py-2">
          <p class="text-gray-800 text-xl">
            Delete
            <span class="text-red-500 font-bold">
              {{ activeUser.first_name }} {{ activeUser.last_name }} </span
            >, Are you sure?
          </p>
        </div>
        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button
            class="px-4 py-2 text-white font-semibold bg-gray-400 hover:bg-gray-300 rounded"
            @click="closeModal()"
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 text-white font-semibold bg-red-500 hover:bg-red-400 rounded"
            @click="deleteUser()"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    activeUser() {
      return { ...this.$store.state.general.activeUser };
    },
  },
  methods: {
    deleteUser() {
      this.axios
        .delete(`https://reqres.in/api/users/${this.activeUser.id}`)
        .then((res) => {
          //live Delete (without load or request)
          this.$store.commit("general/deleteUser", this.activeUser);
          this.closeModal();
        });
    },
    closeModal() {
      this.$store.commit("general/setModal", "");
      this.$store.commit("general/setActiveUser", "");
    },
  },
};
</script>

<style>
</style>