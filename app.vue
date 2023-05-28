<script setup>
const response = ref("");

async function doFetch() {
  const res = await $fetch("/api/car/listings", {
    method: "POST",
    body: { message: "test" },
  });

  response.value = res;
}
</script>

<template>
  <div>
    <div>
      <pre>{{ response }}</pre>
      <hr />
      <button @click="doFetch">Click Me</button>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
