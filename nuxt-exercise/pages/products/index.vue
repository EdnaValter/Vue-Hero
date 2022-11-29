<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
// nuxt can render data from both client and server this is called universal rendering
    definePageMeta({
        layout: 'products',
    })
    // fetch products
    //useFetch function tries to minimise the work means no extra request from the server that results in good performance 
    const {data: products} = await useFetch('https://fakestoreapi.com/products')

    // this is another way of overriding metatags
    useHead({
        title:'Edna Valter | Merch',
        meta: [
            {name: 'this is description', content: 'Nuxt Merch'}
        ]
,     })
</script>

<style scoped>

</style>