<template>
  <div>
    <h2>This is a about page</h2>
    <p>
      After this step instructions vary depending upon whether you are using Yarn or npm.
      Yarn is the preferred package manager for working with Nuxt as it is the development
      tool which tests have been written against.
    </p>
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch('api/edna')

// why use server route? we would like to protect our private key from the frontend
  const { data } = await useFetch('api/currency/PHP')
</script>
   
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
