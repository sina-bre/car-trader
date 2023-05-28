<script setup>
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
// const { refresh: refresh2 } = await useAsyncData(
//   () => route.query,
//   () => refresh2()
// );
watch(
  () => route.query,
  () => window.location.reload(true)
);
</script>

<template>
  <div>
    <Cards :cars="cars" v-if="cars.length" />
    <h1 v-else class="text-red-600">No Cars Found With Filters</h1>
  </div>
</template>
