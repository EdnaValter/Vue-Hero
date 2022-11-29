<template>
    <div>
        <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Exercise</NuxtLink>
            <ul class="flex gap-4">
            <!--anchor tag sending extra request, while in Nuxt it doesnt need to request additional components
            all nuxt do is swap up the components and nuxt used active class-->
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>

            </ul>
        </nav>
    </header>
    <!--output the page content-->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>