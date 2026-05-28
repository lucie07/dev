<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        "Hello. I'm Lucie Mingmei Hao. Web, research and design",
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Hello there',
  title: navbarData.homeTitle,
  description: 'Web, research and design',
  link: '/image-10-resized.png',
})
</script>

<template>
  <div>
    <!-- Full-width hero -->
    <MainHero />

    <main class="container max-w-5xl mx-auto text-zinc-600">
      <MainRecent />
      <!-- <MainTrending /> -->

      <!-- All Projects section -->
      <div class="px-4 mt-[-1rem] mb-12 text-left">
        <NuxtLink
          to="/blogs"
          class="text-2xl font-semibold text-black dark:text-[#FFD77A] hover:underline hover:decoration-[#FFD77A] underline-offset-4 transition-colors duration-200"
        >
          All Projects
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
