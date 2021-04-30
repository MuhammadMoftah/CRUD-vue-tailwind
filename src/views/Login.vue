
<template>
  <section class="mt-28">
    <div
      v-if="error"
      class="flex items-center bg-red-500 max-w-sm mx-auto my-4 text-white text-sm font-bold px-4 py-3 rounded"
      role="alert"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
        />
      </svg>
      <p>The user name or password is incorrect.</p>
    </div>
    <div
      class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"
    >
      <div class="relative hidden xl:block xl:w-1/2 h-full">
        <img
          class="absolute h-screen w-full object-cover"
          src="https://wallpaperaccess.com/full/1397748.jpg"
          alt="login"
        />
      </div>
      <div class="w-full xl:w-1/2 p-8">
        <form method="post" action="#" onSubmit="return false">
          <h1 class="text-2xl font-bold">Sign in to see your users</h1>
          <div>
            <span class="text-gray-600 text-sm"> Don't have an account? </span>
            <span class="text-gray-700 text-sm font-semibold"> Sign up </span>
          </div>
          <div class="mb-4 mt-6">
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="email"
              type="text"
              placeholder="Your email address"
              v-model="email"
            />
          </div>
          <div class="mb-6 mt-6">
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="password"
              type="password"
              placeholder="Your password"
              v-model="password"
            />
          </div>
          <div class="flex w-full mt-8">
            <button
              class="w-full bg-gray-800 hover:bg-grey-200 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              type="button"
              @click="login"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      error: false,
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    login() {
      this.axios
        .post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$router.push("/home");

          // add token in Local Storage
          localStorage.setItem("token", res.data.token);

          // add token in VUEX
          this.$store.commit("general/setToken", res.data.token);
        })
        .catch(() => {
          //show error alert
          this.error = true;
        });
    },
  },
};
</script>
