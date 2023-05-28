<script setup>
const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const client = useSupabaseClient();
const user = useSupabaseUser();
// definePageMeta({
//   middleware: ["auth"],
// });
const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

const login = async () => {
  const { user, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  if (error) {
    console.log("error", error);
  }
};
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>
<template>
  <div class="max-w-lg mx-auto mt-8">
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2 mt-16"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 text-black rounded border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 text-black rounded border border-gray-300"
      />
      <button
        type="submit"
        class="p-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-blue-600"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>
