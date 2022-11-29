<template>
  <div>
    <!-- <p>{{product.title}}</p>
        <p>{{product.price}}</p>
        <p>{{product.id}}</p> -->
    <HEAD>
      <Title>Nuxt Exercise | {{ product.title }}</Title>
      <META name="description" :content="product.description" />
    </HEAD>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

//fetch the products
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found:",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
