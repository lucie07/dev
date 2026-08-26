<script setup lang="ts">
useHead({
  title: '404',
  meta: [
    {
      name: 'description',
      content: 'Page not found',
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Wrong Path',
  title: '404',
  description: 'Page Not Found',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl mx-auto">
      <img
        src="/404-image.png"
        alt=""
        width="500"
        class="w-full h-auto"
      >
    </div>
  </div>
</template>
