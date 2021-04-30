<template>
  <div class="users">
    <div class="flex flex-col p-4">
      <div class="overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <!-- static  -->
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status <span class="text-xs text-blue-500">(Static)</span>
                  </th>

                  <th scope="col" class="relative font-medium px-6 py-3">
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="user in users" :key="user.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="user.avatar"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ user.first_name }} {{ user.last_name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Active
                    </span>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium"
                  >
                    <button
                      class="text-indigo-500 text-xs mx-2 hover:text-indigo-700"
                      @click="openEditModal(user)"
                    >
                      <i class="fa fa-edit"></i>
                      Edit
                    </button>

                    <button
                      class="text-red-500 hover:text-red-700 text-xs mx-2"
                      @click="openDeleteModal(user)"
                    >
                      <i class="fa fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav class="relative z-0 text-center -space-x-px" aria-label="Pagination">
        <button
          class="relative rounded focus:outline-none mx-1 inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          @click="getUsers(page)"
          v-for="page in total_pages"
          :key="page"
          :class="
            current_page == page
              ? 'text-indigo-500  border-indigo-500 font-bold'
              : ''
          "
        >
          {{ page }}
        </button>
      </nav>
    </div>

    <transition name="fade" appear>
      <EditModal v-if="$store.state.general.modal == 'editModal'" />
      <DeleteModal v-if="$store.state.general.modal == 'deleteModal'" />
    </transition>
  </div>
</template>

<script>
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
export default {
  components: {
    EditModal,
    DeleteModal,
  },
  name: "home",
  created() {
    const token = this.$store.state.general.token;
    if (!token) {
      this.$router.push("/");
    }
  },
  mounted() {
    // get users
    this.getUsers(1);
  },
  data() {
    return {
      total_pages: "",
      current_page: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.general.users;
    },
  },
  methods: {
    // get the first users page and add it into Vuex
    getUsers(page) {
      this.axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
        // set users to VUEX store
        this.$store.commit("general/setUsers", res.data.data);
        this.total_pages = res.data.total_pages;
        this.current_page = res.data.page;
      });
    },
    openEditModal(user) {
      this.$store.commit("general/setModal", "editModal");
      this.$store.commit("general/setActiveUser", user);
    },
    openDeleteModal(user) {
      this.$store.commit("general/setModal", "deleteModal");
      this.$store.commit("general/setActiveUser", user);
    },
  },
};
</script>

<style>
</style>