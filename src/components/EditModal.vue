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
        <p class="font-semibold text-gray-800">Edit User</p>
        <button class="font-bold text-gray-700" @click="closeModal()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col flex-wrap px-6 py-5 bg-gray-50">
        <div class="flex sm:flex-row flex-wrap items-center mb-5">
          <div class="w-full md:w-1/2 px-3 mb-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-100 h-12 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="First name"
              v-model="newUser.first_name"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-100 h-12 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              v-model="newUser.last_name"
              placeholder="Last Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded h-12 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              v-model="newUser.email"
              placeholder="Email "
            />
          </div>
        </div>
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
          class="px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-400 rounded"
          @click="edit()"
        >
          Edit
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newUser: "",
    };
  },
  mounted() {
    const activeUser = this.$store.state.general.activeUser;
    this.newUser = { ...activeUser };
  },
  methods: {
    edit() {
      this.axios
        .put(`https://reqres.in/api/users/${this.newUser.id}`, {
          ...this.newUser,
        })
        .then((res) => {
          //live Edit (without load or request)
          this.$store.commit("general/editUser", res.data);
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