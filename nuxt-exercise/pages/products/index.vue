<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <h1>Products</h1>
            <div v-for="p in products">
                <NuxtLink :to="`/products/${p.id}`"> {{ p.title }} </NuxtLink> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// nuxt can render data from both client and server thios is called universal rendering
    definePageMeta({
        layout: 'products',
    })
    // fetch products
    //useFetch function tries to minimise the work means no extra request from the server that results in good performance 
    const {data: products} = await useFetch('https://fakestoreapi.com/products')
            // .then(res=>res.json())
            // .then(json=>console.log(json))
</script>

<style scoped>

</style>