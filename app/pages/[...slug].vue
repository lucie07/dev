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
  <main class="py-16">
    <div class="container max-w-xl mx-auto px-4 text-center">
      <div class="inline-block">
        <div class="text-8xl font-bold leading-none">
          404
        </div>
        <div class="mt-2 h-2 bg-[#FFD77A]"></div>
      </div>

      <h1 class="mt-10 text-xl font-normal">
        Page not found
      </h1>
    </div>
  </main>
</template>
